import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ActivitiesScreen} from '../screens';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const ActivitiesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activities" component={ActivitiesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default ActivitiesNavigator;
