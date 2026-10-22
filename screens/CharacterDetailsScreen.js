import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { styles } from '../styles';
import characters from '../data/characters';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CharacterDetailsScreen({route}) {
  const characterId = route.params.characterId; //reads info from prev screen
  const character = characters.find(
    item => item.id === characterId
  );

  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState('');

  const storageKey = `character-comment-${characterId}`;
  useEffect(() => {
    async function loadComments() {
      try {
        const savedComments = await AsyncStorage.getItem(storageKey);

        if (savedComments !== null) {
          setComment(JSON.parse(savedComments));
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
      ...comment,
      {id: Date.now().toString(), text},
    ];

    try {
      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify(updatedComments)
      );
      setComment(updatedComments);
      setNewComment('');
    } catch (error) {
      console.log('Error saving a comment:', error);
    }
  }

  async function deleteComment(commentId) {
    const updatedComments = comment.filter(
      comment => comment.id !== commentId
    );

    try {
      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify(updatedComments)
      );

      setComment(updatedComments);
    } catch (error) {
      console.log('Error deleting the comment:', error);
    }
  }

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Character not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <Text style={styles.description}>
        Region: {character.region}
      </Text>

      <Text style={styles.description}>
        Element: {character.element}
      </Text>

      <Text style={styles.description}>
        Weapon: {character.weapon}
      </Text>

      <Text style={styles.description}>
        Rarity: {character.rarity}
      </Text>

      <Text style={styles.description}>
        {character.description}
      </Text>

      <Text style={styles.cardTitle}>My comments</Text>

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
        <Text style={styles.cardTitle}>Comment</Text>
      </Pressable>

      <FlatList
        data={comment}
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
  )
}