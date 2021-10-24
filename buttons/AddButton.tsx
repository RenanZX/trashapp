import React from "react";
import { TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {Props} from '../App'

const Adicao = require('../assets/images/adicao_button.png')

export default function AddButton({func} : any) {
  return (
    <TouchableOpacity style={{ position: 'absolute', right: 25, bottom: 45 }} onPress={ func }>
      <Image style={{width: 75, height: 75, resizeMode: 'contain' }} source={Adicao} />
    </TouchableOpacity>
  );
}