import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles';

export default function CharacterListScreen({route, navigation}) {
  const categoryType = route.params.categoryType;

  return (
    <View style = {styles.contrainer}>
      <Text style={styles.title}>Character Categories</Text>
      <Text style={styles.description}>
        Browsing by: {categoryType}
      </Text>

      <Text style={styles.description}>
        blah blah
      </Text>

      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate('CharacterDetails', {
            characterName: 'Keqing',
          })
        }
      >
        <Text style={styles.cardTitle}>Example: Keqing</Text>
        <Text>Tap to open the details screen</Text>
      </Pressable>
    </View>
  )
}