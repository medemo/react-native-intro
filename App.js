import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigation from './navigations/HomeNavigation'
import Game from './components/Game'

const AppNavigator = createBottomTabNavigator({
  Home: HomeNavigation,
  Game: Game,
}, {
  // defaultNavigationOptions: ({ navigation }) => ({
  //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //     return <Ionicons name='ios-options' size={25} color={tintColor} />;
  //   },
  // }),
});


export default createAppContainer(AppNavigator);
