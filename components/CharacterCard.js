import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles';

export default function CharacterCard({ character, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{character.name}</Text>
      <Text>Element: {character.element}</Text>
      <Text>Weapon: {character.weapon}</Text>
    </Pressable>
  );
}
