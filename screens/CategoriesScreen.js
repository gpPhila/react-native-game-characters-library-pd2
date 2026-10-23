import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles';
import CategoryCard from '../components/CategoryCard';

export default function CategoriesScreen({navigation}) {
  function openRegion(region) {
    navigation.navigate('CharacterList', { region });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genshin Game Characters' Library</Text>
      <Text style={styles.description}>
        Choose the region
      </Text>

      <CategoryCard
        title="Inazuma"
        region="Inazuma"
        onPress={openRegion}
      />

      <CategoryCard
        title="Fontaine"
        region="Fontaine"
        onPress={openRegion}
      />

      <CategoryCard
        title="Nod-Krai"
        region="Nod-Krai"
        onPress={openRegion}
      />

      <CategoryCard
        title="Snezhnaya"
        region="Snezhnaya"
        onPress={openRegion}
      />

      <CategoryCard
        title="All characters"
        region="All characters"
        onPress={openRegion}
      />
    </View>
  )
}