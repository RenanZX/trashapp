import React from "react";
import { styles } from "../styles"
import { TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const Menu = require('../assets/images/button_menu.png')


function MenuButton() {
    return (
      <TouchableOpacity style={{position: 'absolute',left: 0,right: 0, top:0}} onPress={() => DrawerActions.openDrawer()}>
        <Image style={styles.btn_menu} source={Menu}/>
      </TouchableOpacity>
    );
}

export default MenuButton;