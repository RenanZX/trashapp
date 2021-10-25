import React, {useState} from "react";
import { Text, View, Modal } from 'react-native';
import MenuButton from "../buttons/MenuButton";
import { styles } from "../styles"
import {Props} from '../App';
import FormIdeia from "../forms/FormIdeia";
import { items } from "../examples/ItemsIdeias";
import ListItem from "../components/ListItem";
import { BasicForm, createForm} from "../forms/BasicForm";
import AddButton from "../buttons/AddButton";

type State = {
  title: string;
  text: string;
};

let count = 2;

function Ideias({ navigation }: Props) {
  const [form, setForm] = useState<BasicForm>();
  const [state, setState] = useState<State>();
  return (
    <View style={styles.container}>
      <MenuButton navigation={navigation} />
      <View style={styles.headerView}>
        <Text style={styles.textTitlePage}>Ideias Sustentáveis</Text>
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
        <Modal transparent={true} visible={state != undefined}>
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View style={styles.basicFormView}>
              <FormIdeia
                onConfirm={(text, title) => {
                  count++;
                  if (title != undefined && title.length > 0) {
                    items.push({
                      key: "item" + count,
                      title: title,
                      description: text,
                    });
                }
                setState(undefined);
                }}
                onCancelar={() => setState(undefined)}
                navigation={navigation}
              />
            </View>
          </View>
        </Modal>
      </View>
      <View style={[styles.footerView]}>
        <AddButton func={() => setState({ text: "", title: "" })} />
      </View>
    </View>
  );
}

export default Ideias;