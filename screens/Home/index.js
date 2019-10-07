import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'


export default () => {
  const [joke, setJoke] = useState(null)

  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/jokes/random')
      .then(({ data }) => {
        setJoke(data)
      })
  }, [])

  return (
    <View style={styles.container}>
      {joke && <>
        <Text style={styles.joke}>{joke.setup}</Text>
        <Text style={styles.joke}>{joke.punchline}</Text></>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  },
  joke: {
    textAlign: 'center',
    fontSize: 36
  },
});
