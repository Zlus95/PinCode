import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  keyBoardButton: {
    backgroundColor: "yellow",
    width: 80,
    height: 75,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  titleButton: {
    fontSize: 40,
  },
  active: {
    height: 20,
    width: 20,
    borderRadius: 50,
    margin: 5,
    backgroundColor: "yellow",
  },
  unActive: {
    height: 20,
    width: 20,
    borderRadius: 50,
    margin: 5,
    backgroundColor: "grey",
  },
  passwordButtons: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
  },
  keyBoardContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  boxPassword: {
    height: 40,
  },
  boxKeyBoard: {
    margin: 10,
  },
});
