import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { general_background_color, styles } from "../styles";

const formStyle = StyleSheet.create({
  doacaoVendaForm: {
    backgroundColor: general_background_color,
    margin: 40,
    padding: 30,
    borderRadius: 10,
    flex: 1,
  },
});

type DoacaoVendaFormProps = {
  key: string;
  title?: string;
  description?: string;
  onClose: () => void;
};

export default class DoacaoVendaForm extends Component<DoacaoVendaFormProps> {
  render() {
    const { key, onClose, title, description } = this.props;
    return (
      <View key={key} style={{ backgroundColor: "#000000aa", flex: 1 }}>
        <View style={formStyle.doacaoVendaForm}>
          <View style={styles.headerView}>
            <Text style={styles.textTitlePopup}>{title}</Text>
          </View>
          <View style={styles.contentView}>
              <Text>{description}</Text>
          </View>
          <View style={styles.footerView}>
            <Pressable style={styles.primaryButton} onPress={onClose}>
              <Text style={styles.primaryButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}
