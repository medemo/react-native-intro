import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

import Board from '../../components/Board'

const Game = ({ navigation }) => {
  const turn = useSelector(state => state.turn)

  return (
    <View style={styles.container}>
      <Text style={[styles.statusText, { color: turn === 'X' ? 'blue' : 'red' }]}>
        Next Player: {turn}
      </Text>
      <Board navigation={navigation} />
    </View>
  );
}


const Reset = ({ navigation }) => {
  const dispatch = useDispatch()

  const handleResetPress = () => {
    dispatch({ type: 'RESET' })
    navigation.navigate('Game')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleResetPress}
        style={styles.resetButton}
      >
        <Text style={styles.resetButtonText}>
          Reset
      </Text>
      </TouchableOpacity>
    </View>
  )
}

export default createStackNavigator({
  Game,
  Reset
}, {
  defaultNavigationOptions: {
    header: null
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: 'orange',
    borderRadius: 20,
    paddingVertical: 10,
    width: '60%'
  },
  resetButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }
})
