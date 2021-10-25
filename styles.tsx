import { StyleSheet, Dimensions } from 'react-native';


const general_background_color = "#C8EEAB";

const primary_button_color = "#66A865";

const colors = {
  gray: '#808080',
  black: '#000',
  white: '#FFF',
  red: '#FF8F6B'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8EEAB",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    top: 32,

    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },
  absoluteView: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title_view: {
    position: "absolute",
    left: 60,
    top: 95,
    fontSize: 30,
    fontWeight: "bold",
  },
  btn_main_first: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  btn_main: {
    width: 80,
    height: 80,
    marginLeft: 30,
    resizeMode: "contain",
  },
  btn_menu: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  textTitlePage: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    display: "flex",
    textAlign: "center",
    top: 95,
  },
  textTitlePopup: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    display: "flex",
    textAlign: "center",
  },
  contentView: {
    height: "73%",
  },
  headerView: {
    height: "20%",
  },
  footerView: {
    height: "7%",
    display: "flex",
    alignItems: "center",
    alignContent: "space-around",
  },
  primaryButton: {
    width: 100,
    height: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    borderRadius: 6,
    backgroundColor: primary_button_color,
  },
  primaryButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
  },
  basicFormView: {
    backgroundColor: general_background_color,
    margin: 40,
    padding: 30,
    borderRadius: 10,
    flex: 1,
  },
});

export  { styles, primary_button_color, general_background_color, colors };
