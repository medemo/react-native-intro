import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeNavigation from './navigations/HomeNavigation'
import Game from './screens/Game'
import Move from './screens/Move'

const AppNavigator = createBottomTabNavigator({
  Home: HomeNavigation,
  Game: Game,
  Move: Move
}, {
  initialRouteName: 'Move'
});


export default createAppContainer(AppNavigator);
