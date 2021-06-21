import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();


import { AppStackRoutes } from './app.stack.routes';
import { AuthRoutes } from './auth.routes';
import {Profile} from '../screens/Profile'

export function AppRoutes() {
  const theme = useTheme();
  return (

    

    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.success,
        inactiveTintColor: theme.colors.text,
        showLabel: false,

        style: {
          paddingVertical: Platform.OS === 'ios' ? 5 : 0,
          height: 70
        }

      }}
    >
      <Screen
        name="Home" component={AppStackRoutes}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather
              name="home"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Profile" component={AuthRoutes}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather
              name="user"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  );
}