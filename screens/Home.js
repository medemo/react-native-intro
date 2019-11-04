import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Register"
        onPress={() => {
          props.navigation.navigate('Register')
        }}
      />
    </View>
  )
}

Home.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});