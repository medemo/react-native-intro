import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'

import Box from '../components/MovingObjects/Box'
import Circle from '../components/MovingObjects/Circle'

export default function Move(props) {
  const [containerDimension, setContainerDimension] = useState({ height: 0, width: 0 })

  const handleLayoutChange = ({ nativeEvent: { layout } }) => {
    setContainerDimension(layout)
  }

  return (
    <View style={styles.container} onLayout={handleLayoutChange} >
      <Box containerDimension={containerDimension} />
      <Circle containerDimension={containerDimension} />
    </View >
  )
}

Move.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Ionicons name='ios-move' size={25} color={tintColor} />;
  },
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flex: 1
  },
});