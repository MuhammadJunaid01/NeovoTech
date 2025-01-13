/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CalendarIcon, HomeIcon, NotificationBellIcon} from '../assets/icons';
import {BottomTabsParamList} from '../interfaces';
import {
  ActivitiesScreen,
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#0C4650',
        tabBarStyle: {paddingBottom: 5, height: 66, paddingTop: 5},
        tabBarLabelStyle: {
          fontSize: 16,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeIcon size={size + 11} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <CalendarIcon size={size + 11} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <NotificationBellIcon size={size + 11} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={}
        options={{
          tabBarIcon: ({color, size}) => (
            <NotificationBellIcon size={size + 11} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
