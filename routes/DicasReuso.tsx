import React, {useState} from "react";
import { Text, View, Modal } from 'react-native';
import { styles } from "../styles";
import ListItem from "../components/ListItem";
import { items } from "../examples/ItemsDicasReuso";
import { Props } from '../App';
import MenuButton from '../buttons/MenuButton';
import { BasicForm, createForm, BasicItemForm } from "../forms/BasicForm";

function DicasReuso({ navigation }: Props) {
    const [form, setForm] = useState<BasicForm>();
    return (
        <View style={styles.container}>
        <MenuButton navigation={navigation} />
        <View style={styles.headerView}>
          <Text style={styles.textTitlePage}>Dicas de Reuso</Text>
        </View>
        <View style={styles.contentView}>
          {items.map((item) => {
            return (
              <ListItem
                key={item.key}
                label={item.title}
                text={item.description.substring(0, 50) + "..."}
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

export default DicasReuso;