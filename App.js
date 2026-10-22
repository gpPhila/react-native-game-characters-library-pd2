import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import CharacterListScreen from './screens/CharacterListScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{totle: 'Genshin Encyclopedia'}}
        />
        <Stack.Screen
        name="CharacterList"
        component={CharacterListScreen}
        options={{title: 'Characters'}}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetailsScreen}
          options={{ title: 'Character Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}