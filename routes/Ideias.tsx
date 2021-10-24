import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import MenuButton from "../buttons/MenuButton";
import ListenItem from "../components/ListItem";
import { styles } from "../styles"
import {Props} from '../App';
import FormIdeia from "../forms/FormIdeia";

export default class Ideias extends React.Component<Props> {
    render(){
        return (
            <View style={styles.container}>
                <MenuButton navigation={this.props.navigation}/>
                <Text style={styles.title_view}>Ideias Sustentáveis</Text>
                <FormIdeia navigation={this.props.navigation}/>
            </View>
        );
    }
}