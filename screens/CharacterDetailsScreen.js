import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function CharacterDetailsScreen({route}) {
  const characterName = route.params.characterName; //reads info from prev screen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{characterName}</Text>
      <Text style={styles.description}>
        Element: Electro
      </Text>
      <Text style={styles.description}>
        Weapon: Sword
      </Text>
      <Text style={styles.description}>
        Personal notes will be added here.
      </Text>
    </View>
  )
}