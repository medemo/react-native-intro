import React from 'react'
import { useDispatch } from 'react-redux'
import { Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'


export default ({ value, index }) => {
  const dispatch = useDispatch()
  const size = 0.8 * Dimensions.get('window').width / 3

  const handlePress = () => {
    !value && dispatch({ type: 'PLAY', index })
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.square, { width: size, height: size }]}
    >
      <Text style={[styles.squareText, { color: value === 'X' ? 'blue' : 'red' }]}>
        {value}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'orange',
  },
  squareText: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold'
  }
})