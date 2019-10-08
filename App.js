import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import Constants from 'expo-constants'

import Home from './screens/Home'
import Game from './screens/Game'
import ScoreBoard from './screens/ScoreBoard'
import store from './store'


const AppContainer = createAppContainer(
  createBottomTabNavigator({
    Home,
    Game,
    ScoreBoard
  }, {
    initialRouteName: 'ScoreBoard'
  })
)

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <AppContainer />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})