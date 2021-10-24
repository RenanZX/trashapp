import React from "react";
import { styles } from "../styles"
import { TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import { NavigationScreenProp } from 'react-navigation';
import {RootStackParamList} from '../types';

const Menu = require('../assets/images/button_menu.png')

export default function MenuButton({navigation} : any) {
  return (
    <TouchableOpacity style={{ position: 'absolute',left: 0,right: 0, top:0 }} onPress={ () => navigation.dispatch(DrawerActions.openDrawer()) }>
      <Image style={styles.btn_menu} source={Menu}/>
    </TouchableOpacity>
  );
}