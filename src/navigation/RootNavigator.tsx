/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailsScreen from '../screens/DetailsScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Bottom Tabs */}
      <Stack.Screen
        name="Main"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />

      {/* Stack Screen with Icons */}
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitle: 'Details',
          headerStyle: {backgroundColor: '#3498db'},
          headerTintColor: '#fff',
          headerRight: () => (
            <Icon
              name="info-outline"
              size={24}
              color="white"
              style={{marginRight: 15}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
