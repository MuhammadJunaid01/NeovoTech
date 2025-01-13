import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DetailsScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
