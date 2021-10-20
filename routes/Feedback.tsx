import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry } from 'react-native';

function Feedback() {
  return (
    <View style={styles.container}>
      <Text>Feedback Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#336600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Feedback;