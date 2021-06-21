import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';




export function AppStackRoutes(){
    return(
       <Navigator headerMode="none" initialRouteName="Home">
           <Screen name="Home" component={Home} />
           <Screen name="Details" component={Details} />
       </Navigator>     
    )
}