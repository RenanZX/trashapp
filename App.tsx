import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import Home from './routes/Home';
import Feedback from './routes/Feedback';
import Report from './routes/Report';

AppRegistry.registerComponent('Feedback', () => Feedback)
AppRegistry.registerComponent('Report', () => Report)
AppRegistry.registerComponent('Home', () => Home)

const Drawer = createDrawerNavigator();

const Theme = {
  dark: false,
  colors: {
    primary: 'rgb(16, 105, 41)',
    background: 'rgb(48, 179, 83)',
    card: 'rgb(48, 179, 83)',
    text: 'rgb(255, 255, 30)',
    border: 'rgb(0, 255, 255)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
     <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Reportar Problemas" component={Report} />
     </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#babababa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
