import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, Alert, AppRegistry } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Feedback: undefined;
  Report: undefined;
};

type mainScreenProp = DrawerNavigationProp<RootStackParamList, 'Home'>;

function Home() {
  const navigation = useNavigation<mainScreenProp>();
  return(
    <View style={styles.container}>
      <Button
        title="<"
        color="#417505"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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

export default Home;