import React from "react";
import { TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {Props} from '../App'

const Adicao = require('../assets/images/adicao_button.png')

export default function AddButton({func} : any) {
  return (
    <TouchableOpacity style={{position: "absolute", left: 99, bottom: 25}} onPress={ func }>
      <Image style={{width: 60, height: 60, resizeMode: 'contain' }} source={Adicao} />
    </TouchableOpacity>
  );
}