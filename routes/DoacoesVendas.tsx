import React, { Component, useState } from "react";
import { Text, View, Modal } from 'react-native';
import { styles } from "../styles";
import ListItem from "../components/ListItem";
import DoacaoVendaForm from "../forms/DoacaoVendaForm";
import {Props} from '../App';
import MenuButton from '../buttons/MenuButton';

type DoacaoVendaItem = {
    key: string;
    title: string;
    description: string;
}

let item1: DoacaoVendaItem = {
    key: "item1",
    title: "Celular Motorola Moto G7 play",
    description: "Celular novinho em folha viu!!"
}
let item2: DoacaoVendaItem = {
    key: "item2",
    title: "Livro Cálculo 1",
    description: "Livro de Cálculo, praqueles que estudam por livro"
}

function createForm(item: DoacaoVendaItem, onCloseForm: (() => void)): DoacaoVendaForm {
    let form = new DoacaoVendaForm({
        key: item.key,
        description: item.description,
        onClose: onCloseForm,
        title: item.title,
    });
    return form;
};

function DoacoesVendas({navigation}: Props) {
  const [form, setForm] = useState<DoacaoVendaForm>();
  let items: DoacaoVendaItem[] = [item1, item2];
  return (
    <View style={styles.container}>
      <MenuButton navigation={navigation}/>
      <View style={styles.headerView}>
        <Text style={styles.textTitlePage}>Doações e Vendas</Text>
      </View>
      <View style={styles.contentView}>
        {items.map((item) => {
          return (
            <ListItem
              key={item.key}
              label={item.title}
              text={item.description}
              onClick={() => {
                setForm(createForm(item, () => setForm(undefined)));
              }}
            />
          );
        })}
        <Modal
          transparent={true}
          visible={form != undefined}
          onDismiss={() => setForm(undefined)}
        >
          {form?.render()}
        </Modal>
      </View>
      <View style={styles.footerView}></View>
    </View>
  );
}

export default DoacoesVendas;