import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { styles } from '../styles';
import characters from '../data/characters';

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
        renderItem={({item}) => (
          <Pressable 
            style={styles.card}
            onPress={() =>
              navigation.navigate('CharacterDetails', {
                characterId: item.id,
              })
            }
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>Element: {item.element}</Text>
            <Text>Weapon: {item.weapon}</Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text>No characters added for this region yet.</Text>
        }
      />
    </View>
  )
}