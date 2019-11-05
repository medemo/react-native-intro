import React, { useState, useEffect } from 'react'
import { View, StyleSheet, PanResponder } from 'react-native'

const randomPosition = ({ height, width }) => ({
  top: Math.min(Math.floor(Math.random() * height), height - 100),
  left: Math.min(Math.floor(Math.random() * width), width - 100),
})

export default function Box(props) {
  const { containerDimension } = props

  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    setPosition(randomPosition(containerDimension))
  }, [containerDimension])

  const responder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      setPosition(({top, left}) => ({
        top: top + gestureState.dy,
        left: left + gestureState.dx
      }))
    }
  })

  return (
    <View
      {...responder.panHandlers}
      style={[styles.box, position]}
    />
  )
}


const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    position: 'absolute',
    opacity: 0.5,
    height: 100,
    width: 100
  },
});