
import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles';

export default function CategoryCard({ title, region, onPress }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => onPress(region)}
    >
      <Text style={styles.cardTitle}>{title}</Text>
    </Pressable>
  );
}
