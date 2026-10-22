import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles';
import characters from '../data/characters';
import CommentSection from '../components/CommentSection';

export default function CharacterDetailsScreen({route}) {
  const characterId = route.params.characterId; //reads info from prev screen
  const character = characters.find(
    item => item.id === characterId
  );

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

      <CommentSection characterId={character.id} />
    </View>
  )
}