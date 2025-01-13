import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ActivitiesNavigator from './ActivitiesNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="ActivitiesTab"
        component={ActivitiesNavigator}
        options={{title: 'Activities'}}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
