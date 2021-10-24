import React, { Component } from 'react';
import { Pressable, Text, Alert, StyleSheet } from 'react-native';

type ListenItemProps = {
    label: string;
    text?: string;
    onClick?: (() => void);
}


export default class ListenItem extends Component<any, ListenItemProps> {
  render() {
    const { text, label, onClick } = this.props;
    return (
      <>
        <Pressable
          onPress={onClick}
          style={({ pressed }) => [
              styles.listenItem,
              {
                  backgroundColor: pressed ? "#66A865" : "#8AB476"
              }
          ]}
        >
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      </>
    );
  }
}

const styles = StyleSheet.create({
  listenItem: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 3,
    paddingTop: 6,
    width: "80%",
    borderRadius: 5,
    marginBottom: 3,
    marginTop: 3
  },

  text: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
  },

  label: {
    paddingTop: 9,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 19,
    lineHeight: 12,
    display: "flex",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 4,
  },
});