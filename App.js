import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Todos from "./Todos";

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
        return todoList;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Todo List</Text>

      <Text style={styles.h2}>New todo</Text>
      <View style={styles.inputButton}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder={"New todo"}
        />
        <Pressable style={styles.addButton} onPress={() => handleAddTodo()}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <ScrollView style={{ width: "100%" }}>
        {todoList.map((todo) => (
          <Todos
            text={todo.label}
            key={todo.key}
            complete={todo.complete}
            setComplete={() => handleCompleted(todo.key)}
            delete={() => handleDeleteTodo(todo.key)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(149, 230, 196)",
  },
  h1: {
    fontSize: 25,
    color: "rgb(250, 250, 250)",
  },
  h2: {
    fontSize: 20,
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
    borderColor: "rgb(250, 250, 250)",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgb(250, 250, 250)",
    backgroundColor: "rgb(141, 219, 186)",
    elevation: 3,
  },
  addButtonText: {
    color: "rgb(250, 250, 250)",
    paddingHorizontal: 10,
  },
});
