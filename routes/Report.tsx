import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry } from 'react-native';

function Report() {
  return (
    <View style={styles.container}>
      <Text>Report Screen</Text>
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

export default Report;