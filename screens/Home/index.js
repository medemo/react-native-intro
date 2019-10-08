import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'


const Home = () => {
  const [joke, setJoke] = useState(null)

  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/jokes/random')
      .then(({ data }) => {
        setJoke(data)
      })
      .catch(err => console.log(err.message))
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

Home.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Ionicons name="md-home" size={25} color={tintColor} />;
  }
}

export default Home