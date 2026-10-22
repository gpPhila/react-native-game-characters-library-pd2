
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

export default function CommentSection({ characterId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const storageKey = `character-comment-${characterId}`;

  useEffect(() => {
    async function loadComments() {
      try {
        const savedComments = await AsyncStorage.getItem(storageKey);

        if (savedComments !== null) {
          setComments(JSON.parse(savedComments));
        }
      } catch (error) {
        console.log('Error loading comments:', error);
      }
    }

    loadComments();
  }, [storageKey]);

  async function addComment() {
    const text = newComment.trim();

    if (text === '') {
      return;
    }

    const updatedComments = [
      ...comments,
      { id: Date.now().toString(), text },
    ];

    try {
      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify(updatedComments)
      );

      setComments(updatedComments);
      setNewComment('');
    } catch (error) {
      console.log('Error saving comment:', error);
    }
  }

  async function deleteComment(commentId) {
    const updatedComments = comments.filter(
      comment => comment.id !== commentId
    );

    try {
      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify(updatedComments)
      );

      setComments(updatedComments);
    } catch (error) {
      console.log('Error deleting comment:', error);
    }
  }

  return (
    <View>
      <Text style={styles.cardTitle}>Comments</Text>

      <TextInput
        style={{
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#E2D8F0',
          borderRadius: 8,
          padding: 12,
          marginBottom: 10,
        }}
        placeholder="Write a comment..."
        value={newComment}
        onChangeText={setNewComment}
        multiline
      />

      <Pressable style={styles.card} onPress={addComment}>
        <Text style={styles.cardTitle}>Add comment</Text>
      </Pressable>

      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.text}</Text>

            <Pressable onPress={() => deleteComment(item.id)}>
              <Text style={{ color: '#B42318', marginTop: 10 }}>
                Delete comment
              </Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text>No comments yet. Add your first one!</Text>
        }
      />
    </View>
  );
}
