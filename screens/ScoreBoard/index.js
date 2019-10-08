import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const ScoreBoard = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>ScoreBoard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  },
  text: {
    textAlign: 'center',
    fontSize: 36
  },
});

ScoreBoard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Ionicons name="md-list" size={25} color={tintColor} />;
  }
}

export default ScoreBoard