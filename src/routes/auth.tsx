import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Confirmation } from '../screens/Confirmation';


export function Auth() {

  return (
    <Navigator headerMode="none" initialRouteName="SignIn">
     
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}