import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { styles } from '../styles';
import characters from '../data/characters';
import CharacterCard from '../components/CharacterCard';

export default function CharacterListScreen({route, navigation}) {
  const selectedRegion = route.params.region;

  const regionCharacters =
    selectedRegion === 'All characters'
      ? characters
      : characters.filter(
          character => character.region === selectedRegion
        );

  return (
    <View style = {styles.contrainer}>
      <Text style={styles.title}>{selectedRegion}</Text>
      <Text style={styles.description}>
        Characters from {selectedRegion}
      </Text>

      <FlatList
        data={regionCharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={() =>
              navigation.navigate('CharacterDetails', {
                characterId: item.id,
              })
            }
          />
        )}
        ListEmptyComponent={
          <Text>No characters added for this region yet.</Text>
        }
      />
    </View>
  )
}