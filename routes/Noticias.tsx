import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import  { styles } from "../styles";
import { items } from "../examples/ItemsNoticias";
import ListItem from "../components/ListItem";
import MenuButton from '../buttons/MenuButton';
import {Props} from '../App';
import { BasicForm, createForm, BasicItemForm } from "../forms/BasicForm";

function Noticias({ navigation }: Props) {
  const [form, setForm] = useState<BasicForm>();
  return (
    <View style={styles.container}>
      <MenuButton navigation={navigation} />
      <View style={styles.headerView}>
        <Text style={styles.textTitlePage}>Notícias</Text>
      </View>
      <View style={styles.contentView}>
        {items.map((item) => {
          return (
            <ListItem
              key={item.key}
              label={item.title}
              text={item.description.substring(0, 100) + "..."}
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

export default Noticias;