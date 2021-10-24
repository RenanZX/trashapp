import React, { Component } from "react";
import { Button, TextInput, View, Text } from 'react-native'
import {primary_button_color, styles} from '../styles'
import {Props} from '../App'

type State = {
  title: string;
  text?: string;
}

class FormIdeia extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeTexted = this.onChangeTexted.bind(this)

    this.state = {
      title: '',
      text: ''
    }
  }

  onChangeTitle(e: any){
    this.setState({
      title: e.target.value
    })
  }

  onChangeTexted(e : any){
    this.setState({
      text: e.target.value
    })
  }

  onCompartilha = () => {
    
  }

  onCancela = () => {
    
  }

  render() {
    return(
    <View>
      <Text style={{ fontWeight: 'bold' }}>Titulo:</Text>
      <TextInput
        style={{backgroundColor: '#FFF', width: 250, marginBottom: 10}}
        value={this.state.title}
        onChangeText={this.onChangeTitle}
      />
      <Text style={{ fontWeight: 'bold' }}>Ideia:</Text>
      <TextInput
        style={{backgroundColor: '#FFF', width: 250, marginBottom: 10}}
        value={this.state.text}
        onChangeText={this.onChangeTexted}
      />
      <Button
        color={primary_button_color}
        onPress={this.onCompartilha}
        title="Compartilhar"
      />
      <Button
        color={primary_button_color}
        onPress={this.onCancela}
        title="Cancelar"
      />
    </View>
    );
  }

}

export default FormIdeia;