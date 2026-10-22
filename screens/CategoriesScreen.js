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
      onPress={() => navigation.navigate('CharacterList', {region: 'Inazuma'})}
      >
        <Text style={styles.cardTitle}>Inazuma</Text>
      </Pressable>

      <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('CharacterList', {region: 'Fontaine'})}
      >
        <Text style={styles.cardTitle}>Fontaine</Text>
      </Pressable>

      <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('CharacterList', {region: 'Nod-Krai'})}
      >
        <Text style={styles.cardTitle}>Nod-Krai</Text>
      </Pressable>

      <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('CharacterList', {region: 'Snezhnaya'})}
      >
        <Text style={styles.cardTitle}>Snezhnaya</Text>
      </Pressable>

      <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('CharacterList', {region: 'All characters'})}
      >
        <Text style={styles.cardTitle}>All characters</Text>
      </Pressable>
    </View>
  )
}