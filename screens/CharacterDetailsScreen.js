import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles';
import characters from '../data/characters';
import CommentSection from '../components/CommentSection';
import CharacterInfo from '../components/CharacterInfo';

export default function CharacterDetailsScreen({route}) {
  const characterId = route.params.characterId; //reads info from prev screen
  const character = characters.find(
    item => item.id === characterId
  );

  return (
    <View style={styles.container}>
      <CharacterInfo character={character} />
      <CommentSection characterId={character.id} />
    </View>
  )
}