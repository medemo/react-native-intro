import React, { useState } from 'react'
import { ScrollView, FlatList, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Player from './components/Player'

const data = [
  { id: 'adsfs', score: 1232 },
  { id: 'ghjhrt', score: 1345 },
  { id: 'dfdrt', score: 5656 },
  { id: 'hfgn', score: 453 },
  { id: 'hkhu', score: 6786 },
  { id: 'bfbt', score: 643 },
  { id: 'vdfgt', score: 46 },
  { id: 'qddgr', score: 8979 },
  { id: 'jyffghf', score: 5646 },
  { id: 'bhyj', score: 213 },
  { id: 'gfhfth', score: 7897 },
]

const ScoreBoard = () => {
  const [highlighted, setHighlighted] = useState(null)
  const handleHold = id => setHighlighted(id)

  return (
    // <ScrollView style={styles.container}>
    //   {
    //     data.map(d => (
    //       <View style={styles.player} key={d.id}>
    //         <Text style={styles.text}>{d.id}</Text>
    //         <Text style={styles.text}>:</Text>
    //         <Text style={styles.text}>{d.score}</Text>
    //       </View>
    //     ))
    //   }
    // </ScrollView>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Player player={item} handleHold={handleHold} highlighted={highlighted} />}
      style={styles.container}
      extraData={highlighted}
    />
  )
}

ScoreBoard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Ionicons name="md-list" size={25} color={tintColor} />;
  }
}

export default ScoreBoard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});