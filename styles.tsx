import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8EEAB",
    alignItems: "center",
    justifyContent: "center",
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  title_view: {
    position: 'absolute', 
    left:60, 
    top:95, 
    fontSize: 30, 
    fontWeight: 'bold'
  },
  btn_main_first: {
    width: 80, 
    height: 80,
    resizeMode: 'contain'
  },
  btn_main: { 
    width: 80, 
    height: 80,
    marginLeft: 30,
    resizeMode: 'contain'
  },
  btn_menu: { 
    width: 80, 
    height: 80,
    resizeMode: 'contain'
  },
});

const primary_button_color = "#66A865";

export  { styles, primary_button_color };