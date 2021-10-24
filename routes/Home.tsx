import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles, primary_button_color } from '../styles';
import { NavigationScreenProp } from 'react-navigation';
import {RootStackParamList} from '../types';
import { State } from 'react-native-gesture-handler';
import MenuButton from '../buttons/MenuButton';

const Tree = require('../assets/images/tree.png');
const Mapa = require('../assets/images/mapa_main_opt.png')
const Noticia = require('../assets/images/noticia_main_opt.png')
const Dicas = require('../assets/images/dicas_main_opt.png')
const DicasReuso = require('../assets/images/dicasreuso_main_opt.png')
const Doacao = require('../assets/images/doacaovenda_main_opt.png')
const Ideias = require('../assets/images/ideias_main_opt.png')


export interface Props {
  navigation: NavigationScreenProp<RootStackParamList,'Home'>
};

class Home extends React.Component<Props, object, State> {
  constructor(props: Props){
    super(props)
  }
  state = {
    menuMap : [
      [
        [styles.btn_main_first, () => this.props.navigation.navigate('Mapa'), Mapa],
        [styles.btn_main, () => this.props.navigation.navigate('Noticias'), Noticia],
        [styles.btn_main, () => this.props.navigation.navigate('DicasDescarte'), Dicas]
      ],
      [
        [styles.btn_main_first, () => this.props.navigation.navigate('DicasReuso'), DicasReuso],
        [styles.btn_main, () => this.props.navigation.navigate('DoacoesVendas'), Doacao],
        [styles.btn_main, () => this.props.navigation.navigate('Ideias'), Ideias]
      ]
    ]
  }

  render(){
    return(
    <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Olá fulano</Text>
      <Image source={Tree} style={{ width: 250, height: 250, resizeMode: 'contain' }}/>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Nivel 1</Text>

      <View style={{ flexDirection: 'row' }}>
        { this.state.menuMap[0].map((item, index) =>
          <TouchableOpacity key={index} onPress={ item[1] }>
            <Image style={item[0]} source={item[2]} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ marginTop:20, flexDirection: 'row' }}>
        { this.state.menuMap[1].map((item, index) => 
          <TouchableOpacity key={index} onPress={ item[1] }>
            <Image style={item[0]} source={item[2]} />
          </TouchableOpacity>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  )
};
}

export default Home;
