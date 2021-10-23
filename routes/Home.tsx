import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, Alert, AppRegistry } from 'react-native';
import { styles, primary_button_color } from '../styles';

type RootStackParamList = {
  Home: undefined;
  Feedback: undefined;
  Report: undefined;
  Mapa: undefined;
  Noticias: undefined;
  DicasDescarte: undefined;
  DicasReuso: undefined;
  DoacoesVendas: undefined;
  Ideias: undefined;
};

type mainScreenProp = DrawerNavigationProp<RootStackParamList, 'Home'>;

function Home() {
  const navigation = useNavigation<mainScreenProp>();
  return(
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        color={primary_button_color}
        title="Mapa"
        onPress={ () => navigation.navigate('Mapa') }
      />

      <Button
        color={primary_button_color}
        title="Notícias"
        onPress={ () => navigation.navigate('Noticias') }
      />

      <Button
        color={primary_button_color}
        title="Dicas de Descarte"
        onPress={ () => navigation.navigate('DicasDescarte') }
      />

      <Button
        color={primary_button_color}
        title="Dicas de Reuso"
        onPress={ () => navigation.navigate('DicasReuso') }
      />

      <Button
        color={primary_button_color}
        title="Doações e Vendas"
        onPress={ () => navigation.navigate('DoacoesVendas') }
      />

      <Button
        color={primary_button_color}
        title="Ideias"
        onPress={ () => navigation.navigate('Ideias') }
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;