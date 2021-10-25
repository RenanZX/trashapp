import React, { useState } from "react";
import { Text, View, Button, Image, StyleSheet, Modal, ListViewBase } from 'react-native';
import { colors, styles } from "../styles"
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { RectButton, TextInput } from "react-native-gesture-handler";
import {Props} from '../App'
import FormMapa from '../forms/FormMapa';
import { string } from "yargs";

const Adicao = require('../assets/images/adicao_button.png')
const Search = require('../assets/images/searchIcon.png')
const Pin = require('../assets/images/pinIcon.png')
const UnableAdicao = require('../assets/images/adicao_button_unable.png')

const mapstyles = StyleSheet.create({
    rbutton: {
        width: 60, 
        height: 60, 
        resizeMode: 'contain' 
    },
    footer: {
        position: "absolute", 
        right: 24, 
        bottom: 53
    },
    text_icon: {
        color: colors.gray,
        fontWeight: 'bold'
    },
    top: {
        position: "absolute",
        left: 24,
        right: 24,
        top: 32,

        backgroundColor: "#fff",
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        elevation: 3,
    }
});

class Mapa extends React.Component<Props> {

    state = {
        region: {
            latitude: -15.759329042138626,
            longitude: -47.92363635459222,
            latitudeDelta: 0.0520,
            longitudeDelta: 0.0421,
        },
        list: [],
        marker: null,
        enable: false,
        title: undefined,
        text: undefined
    }

    renderButton(){
        if(!this.state.enable){
            return(
                <RectButton>
                    <Image style={mapstyles.rbutton} source={UnableAdicao} />
                </RectButton>
            );
        }else{
            return(
                <RectButton onPress={() => this.setState({ text: "", title: "" })}>
                    <Image style={mapstyles.rbutton} source={Adicao} />
                </RectButton>
            );
        }
    }

    render(){
        const {title, text, list} = this.state;
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate, enable: true })}>
                    {
                          this.state.marker &&
                          <Marker image={Pin} coordinate={this.state.marker} />
                    }
                    {
                        list.map((item, index) => {
                            return(
                                <Marker key={index} image={Pin} coordinate={item[2]}>
                                    <View style={{width: 60, height:60, left:20, bottom: 5}}>
                                        <Text style={mapstyles.text_icon}>{item[0].substring(0,5)}</Text>
                                    </View>
                                </Marker>
                            );
                        })
                    }

                </MapView>
                <View style={mapstyles.top}>
                    <TextInput
                        placeholder={`Pesquise uma localidade`}
                    />
                    <RectButton>
                        <Image style={{width: 56, height: 56}} source={Search} />
                    </RectButton>
                </View>
                <Modal transparent={true} visible={title != undefined && text != undefined}>
                  <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                    <View style={styles.basicFormView}>
                      <FormMapa
                        onConfirm={(text, title) => {
                            if(this.state.marker != null){
                                this.state.list.push([title, text, this.state.marker])
                            }
                            this.setState({title:undefined, text: undefined, enable: false})
                        }}
                        onCancelar={() => this.setState({title: undefined, text: undefined})}
                        navigation={this.props.navigation}
                      />
                    </View>
                  </View>
                </Modal>
                <View style={mapstyles.footer}>
                    {this.renderButton()}
                </View>
                
            </View>
        );
    }
}

export default Mapa;