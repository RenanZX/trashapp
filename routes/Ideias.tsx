import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import MenuButton from "../buttons/MenuButton";
import ListenItem from "../components/ListItem";
import { styles } from "../styles"
import { NavigationScreenProp } from 'react-navigation';
import {RootStackParamList} from '../types';
import {Props} from '../App';
import AddButton from "../buttons/AddButton";
import FormIdeia from "../forms/FormIdeia";

function Ideias({navigation}: Props) {
    return (
        <View style={styles.container}>
            <MenuButton navigation={navigation}/>
            <Text style={styles.title_view}>Ideias Sustentáveis</Text>
            <FormIdeia navigation={navigation}/>
            <AddButton navigation={navigation} screen='Home'/>
        </View>
    );
}

export default Ideias;