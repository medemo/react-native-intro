import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated } from 'react-native'

const randomPosition = ({ height, width }) => ({
  top: Math.min(Math.floor(Math.random() * height), height - 100),
  left: Math.min(Math.floor(Math.random() * width), width - 100),
})

export default function Circle(props) {
  const { containerDimension } = props
  const [height] = useState(new Animated.Value(50))
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    setPosition(randomPosition(containerDimension))
  }, [containerDimension])

  return (
    <Animated.View
      onStartShouldSetResponder={() => true}
      onResponderGrant={() => {
        Animated.timing(
          height,
          {
            toValue: 100,
            duration: 1000,
          }
        ).start()
      }}
      onResponderRelease={() => {
        Animated.timing(
          height,
          {
            toValue: 50,
            duration: 1000,
          }
        ).start()
      }}
      style={[styles.circle, position, { height }]}
    />
  )
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'green',
    position: 'absolute',
    borderRadius: 50,
    opacity: 0.5,
    width: 100
  },
});
