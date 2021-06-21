import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import { Profile } from '../screens/Profile';




export function AppRoutesProfile() {
  


  return (
    <Navigator headerMode="none" initialRouteName="Profile">
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}