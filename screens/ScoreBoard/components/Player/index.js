import React from 'react'
import { StyleSheet, View, Text, PanResponder } from 'react-native'

export default ({ player, handleHold, highlighted }) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => handleHold(player.id),
    onPanResponderRelease: (evt, gestureState) => handleHold(null),
  });

  return (
    <View
      style={[
        styles.player,
        { opacity: (highlighted && (player.id !== highlighted)) ? 0 : 1 }
      ]}
      {...panResponder.panHandlers}>
      <Text style={styles.text}>{player.id}</Text>
      <Text style={styles.text}>:</Text>
      <Text style={styles.text}>{player.score}</Text>
    </View>
  )

}


const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    paddingVertical: 20
  },
  text: {
    fontSize: 20
  }
});