import React, { Component } from "react";
import { Button, TextInput, StyleSheet, View, Text } from 'react-native'
import {primary_button_color, styles, colors} from '../styles'
import {Props} from '../App'
import AddButton from "../buttons/AddButton";

type State = {
  title: string;
  text: string;
}


const style_form = StyleSheet.create({
  input_text: {
    backgroundColor: colors.white, 
    width: '100%', 
    marginBottom: 10, 
    borderColor: colors.gray, 
    borderWidth: 2, 
    borderRadius: 3
  }
})

interface FormProps extends Props {
  onConfirm: (text: string, title: string) => void;
  onCancelar: () => void;
}

class FormIdeia extends Component<FormProps, State> {

  constructor(props: FormProps){
    super(props)
  }

  state = {
    title: "",
    text: "",
  }

  render() {
    const { onConfirm, onCancelar } = this.props;
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
              onPress={() => {
                  onConfirm.call(this, this.state.text, this.state.title);
              }}
              title="Compartilhar"
            />
          </View>

          <View style={{flex:1, marginLeft: 10}}>
            <Button
              color={colors.red}
              onPress={onCancelar}
              title="Cancelar"
            />
          </View>
        </View>
      </View>
      );
  }

}

export default FormIdeia;