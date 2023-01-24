import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

export default Todos = (props) => {
  return (
    <View style={styles.container}>
      {props.complete ? (
        <Text style={styles.completeItem}>{props.text}</Text>
      ) : (
        <Text style={styles.todoItem}>{props.text}</Text>
      )}
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={props.setComplete}>
          <Text style={styles.buttonText}>Complete</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={props.delete}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderBottomWidth: 1.5,
    width: "100%",
    alignItems: "stretch",
    minHeight: 40,
    justifyContent: "space-between",
  },
  todoItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: "#F0F0F0",
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  completeItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: "#F0F0F0",
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "red",
    textDecorationLine: "line-through",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgb(250, 250, 250)",
    backgroundColor: "rgb(141, 219, 186)",
    elevation: 3,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "rgb(250, 250, 250)",
    paddingHorizontal: 10,
  },
});
