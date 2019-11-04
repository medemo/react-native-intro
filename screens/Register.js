import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
    </View>
  )
}

Register.navigationOptions = {
  title: 'Register',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});