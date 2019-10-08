import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'

import Square from '../Square'

export default ({navigation}) => {
  const squares = useSelector(state => state.squares)
  
  useEffect(() => {
    if (!squares.includes(null)) {
      navigation.navigate('Reset')
    }
  }, [squares])

  return (
    <View style={styles.board}>
      {
        Array(9).fill().map((_, i) => (
          <Square key={i} index={i} value={squares[i]} />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24
  }
})