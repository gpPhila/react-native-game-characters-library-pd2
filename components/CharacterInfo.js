
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function CharacterInfo({ character }) {
  return (
    <View>
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
    </View>
  );
}
