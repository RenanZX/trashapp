import React, { Component } from "react";
import { Button, TextInput, StyleSheet, View, Text } from 'react-native'
import {primary_button_color, styles, colors} from '../styles'
import {Props} from '../App'
import AddButton from "../buttons/AddButton";

type State = {
  title: string;
  text: string;
  adicionar: boolean
}


const style_form = StyleSheet.create({
  input_text: {
    backgroundColor: colors.white, 
    width: 250, 
    marginBottom: 10, 
    borderColor: colors.gray, 
    borderWidth: 2, 
    borderRadius: 3
  }
})

class FormIdeia extends Component<Props, State> {

  constructor(props: Props){
    super(props)
  }

  state = {
    title: '',
    text: '',
    adicionar: false
  }

  render() {
    const{adicionar} = this.state
    if(adicionar != null && adicionar == true){
      return(
      <View>
        <Text style={{ fontWeight: 'bold' }}>Titulo:</Text>
        <TextInput
          style={style_form.input_text}
          value={this.state.title}
          onChangeText={text =>this.setState({title: text})}
        />
        <Text style={{ fontWeight: 'bold' }}>Ideia:</Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          style={style_form.input_text}
          value={this.state.text}
          onChangeText={text => this.setState({text: text})}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{flex:1}}>
            <Button
              color={primary_button_color}
              onPress={()=>{}}
              title="Compartilhar"
            />
          </View>

          <View style={{flex:1}}>
            <Button
              color={colors.red}
              onPress={()=>this.setState({adicionar: false})}
              title="Cancelar"
            />
          </View>
        </View>
      </View>
      );
    }else{
      return (<AddButton func={() => this.setState({adicionar: true})} />);
    }
  }

}

export default FormIdeia;