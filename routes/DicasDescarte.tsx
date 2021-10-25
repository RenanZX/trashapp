import React, {useState} from 'react';
import { Text, View, Modal } from 'react-native';
import { styles } from "../styles";
import MenuButton from '../buttons/MenuButton';
import { Props } from '../App';
import { items, DicaDescarteItem } from '../examples/ItemsDicasDescarte';
import ListItem from "../components/ListItem";
import BasicForm from "../forms/BasicForm";

function createForm(item: DicaDescarteItem, onCloseForm: (() => void)): BasicForm {
    let form = new BasicForm({
        key: item.key,
        description: item.description,
        onClose: onCloseForm,
        title: item.title,
    });
    return form;
};

function DicasDescarte({ navigation }: Props) {
  const [form, setForm] = useState<BasicForm>();
  return (
    <View style={styles.container}>
      <MenuButton navigation={navigation} />
      <View style={styles.headerView}>
        <Text style={styles.textTitlePage}>Dicas de descarte</Text>
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

export default DicasDescarte;