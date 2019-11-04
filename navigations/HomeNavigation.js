import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home'
import Register from '../screens/Register'


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,
  },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

AppNavigator.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    return <Ionicons name='ios-home' size={25} color={tintColor} />;
  },
}

export default AppNavigator
