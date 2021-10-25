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
    title: "Celular Xiaomi Redmi note 7",
    description: "Vendo este celular em perfeitas condições.\n" +
    "O valor é R$ 800,00. Tento interesse, pode me procurar pelo número +55619XXXXXXXX.\n" +
    "Acompanha: caixinha original, carregador original, e duas cases (capinhas)," +
    "uma rosa de glitter e outra preta anti impacto. Está com película novinha, sem graves!!\n" +
    "OBS: bateria dura 1 dia as vezes 1 dia e meio, depende do uso.\n",
}
let item2: DoacaoVendaItem = {
    key: "item2",
    title: "Livro Cálculo 1",
    description: "Livro de Cálculo 1, disponível para doação.\n" +
    "O livro está em boas condições e pode ser utilizado normalmente.\n" +
    "Caso tenha interesse, me procura pelo número +55619XXXXXXXX."
}
let item3: DoacaoVendaItem = {
  key: "item3",
  title: "Bola de futebol Jabulani oficial",
  description:  "Tenho uma bola de futebol Jabulani oficial, foi realmente utilizada na copa do mundo\n" +
  "Estou deixando ela disponível para doação.\n" +
  "A primeira pessoa que aparecer leva.\n" +
  "Meu número é +55619XXXXXXXX, chama lá ;)"
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
  let items: DoacaoVendaItem[] = [item2, item1, item3];
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
              text={item.description.substring(0, 50)+"..."}
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