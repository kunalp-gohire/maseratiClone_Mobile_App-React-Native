import React from 'react'
import {  View, StyleSheet, Text, TouchableOpacity } from 'react-native'
const StyledButton = props => {
  const type = props.type;

  const backgroundColor = type === 'secondary' ? '#171A20CC' : '#FFFFFFA6';
  const color = type === 'secondary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={.5}
        style={[styles.button, { backgroundColor: backgroundColor, color: color }]}
        onPress={() => { console.warn('pressed') }} onPress={() => { props.onPress() }}>
        <Text style={[styles.text, { color: color }]}>{props.content}</Text>

      </TouchableOpacity>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10
  },
  button: {
    backgroundColor: 'yellow',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',

  }
})
export default StyledButton