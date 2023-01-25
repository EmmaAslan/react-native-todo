import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import AddIcon from "react-native-vector-icons/Feather";
import CheckIcon from "react-native-vector-icons/Feather";
import TrashIcon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (text.length > 0) {
      setTodoList([
        ...todoList,
        { key: Date.now(), label: text, complete: false },
      ]);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        if (todo.key !== id) return true;
      })
    );
  };

  const handleCompleted = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.key === id) todo.complete = !todo.complete;
        return todo;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Todo List</Text>

      <ScrollView style={{ width: "100%" }}>
        {todoList.map((todo) => (
          <View style={styles.listContainer} key={todo.key}>
            {todo.complete ? (
              <Text style={styles.completeItem}>{todo.label}</Text>
            ) : (
              <Text style={styles.todoItem}>{todo.label}</Text>
            )}
            <View style={styles.buttons}>
              <Pressable
                style={styles.button}
                onPress={() => handleCompleted(todo.key)}
              >
                <CheckIcon name="check" size={30} style={styles.buttonText} />
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleDeleteTodo(todo.key)}
              >
                <TrashIcon name="trash" size={25} style={styles.buttonText} />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.h2}>New todo</Text>
      <View style={styles.inputButton}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder={"New todo"}
        />
        <Pressable style={styles.addButton} onPress={() => handleAddTodo()}>
          <AddIcon name="plus" size={30} style={styles.addButtonText} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(149, 230, 196)",
    fontFamily: "sans-serif-medium",
  },
  h1: {
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "rgb(250, 250, 250)",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "rgb(250, 250, 250)",
    paddingBottom: 15,
    paddingTop: 25,
  },
  inputButton: {
    flexDirection: "row",
    height: "auto",
  },
  input: {
    maxHeight: 40,
    flex: 1,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "rgb(250, 250, 250)",
    borderColor: "rgb(250, 250, 250)",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgb(250, 250, 250)",
    backgroundColor: "rgb(141, 219, 186)",
    elevation: 1,
  },
  addButtonText: {
    color: "rgb(250, 250, 250)",
    paddingHorizontal: 10,
  },
  listContainer: {
    marginTop: 8,
    flexDirection: "row",
    borderColor: "#FFFFFF",
    backgroundColor: "rgb(141, 219, 186)",
    borderWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    fontFamily: "sans-serif-medium",
  },
  todoItem: {
    padding: 12,
    fontSize: 17,
    color: "white",
  },
  completeItem: {
    padding: 12,
    fontSize: 17,
    color: "rgb(225, 225, 225)",
    textDecorationLine: "line-through",
    textDecorationColor: "rgb(123, 167, 149)",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  buttonText: {
    color: "rgb(250, 250, 250)",
    paddingHorizontal: 10,
  },
});
