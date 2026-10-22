import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles';

export default function CategoriesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genshin Game Characters' Library</Text>
      <Text style={styles.description}>
        Choose the region
      </Text>

      <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('CharacterList', {categoryType: 'fontaine'})}
      >
        <Text style={styles.cardTitle}>Fontaine</Text>
      </Pressable>

      <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('CharacterList', {categoryType: 'nodkrai'})}
      >
        <Text style={styles.cardTitle}>Nod-Krai</Text>
      </Pressable>
    </View>
  )
}