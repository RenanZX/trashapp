import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';


import Home from './routes/Home';
import Feedback from './routes/Feedback';
import Report from './routes/Report';
import Mapa from './routes/Mapa';
import Noticias from './routes/Noticias';
import DicasDescarte from './routes/DicasDescarte'
import DicasReuso from './routes/DicasReuso'
import DoacoesVendas from './routes/DoacoesVendas'
import Ideias from './routes/Ideias'

AppRegistry.registerComponent('Feedback', () => Feedback)
AppRegistry.registerComponent('Report', () => Report)
AppRegistry.registerComponent('Home', () => Home)
AppRegistry.registerComponent('Mapa', () => Mapa)
AppRegistry.registerComponent('Noticias', () => Noticias)
AppRegistry.registerComponent('DicasDescarte', () => DicasDescarte)
AppRegistry.registerComponent('DicasReuso', () => DicasReuso)
AppRegistry.registerComponent('DoacoesVendas', () => DoacoesVendas)
AppRegistry.registerComponent('Ideias', () => Ideias)

const Drawer = createDrawerNavigator();

const Theme = {
  dark: false,
  colors: {
    primary: "#66A865",
    background: "#C8EEAB",
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
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Reportar" component={Report} />
      <Drawer.Screen name="Noticias" component={Noticias} />
      <Drawer.Screen name="DicasDescarte" component={DicasDescarte} />
      <Drawer.Screen name="DicasReuso" component={DicasReuso} />
      <Drawer.Screen name="DoacoesVendas" component={DoacoesVendas} />
      <Drawer.Screen name="Ideias" component={Ideias} />
     </Drawer.Navigator>
    </NavigationContainer>
  );
}
