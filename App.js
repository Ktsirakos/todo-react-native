import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Input } from "./components/Input";
import image from "./img/trash-can.png";

const TodoRow = (props) => {
  const [rowState, setRowState] = useState(false);

  const changeRow = (value) => {
    console.log(value);
    setRowState(value);
  };

  return (
    <View style={styles.todoRow}>
      <Pressable onPress={() => changeRow(!rowState)}>
        <View style={[styles.circleView, rowState ? styles.selected : ""]}>
          {rowState ? <Text style={styles.checkMark}>✓</Text> : <Text></Text>}
        </View>
      </Pressable>
      <Text style={styles.todoRowTitle}>{props.title}</Text>
      <Pressable>
        <Image style={{ width: 25, height: 25 }} source={image} />
      </Pressable>
    </View>
  );
};

const ListView = (props) => {
  return (
    <View style={styles.listView}>
      {props.data.map((elem) => {
        return <TodoRow key={elem} title={elem}></TodoRow>;
      })}
    </View>
  );
};
export default function App() {
  const [todoList, setTodoList] = React.useState([]);

  const onAddPress = (text) => {
    setTodoList([...todoList, text]);
    console.log(todoList);
  };

  return (
    <View style={styles.container}>
      <Input onAdd={onAddPress} />
      <ListView data={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
  },
  listView: {
    paddingTop: 20,
  },
  todoRow: {
    width: "90%",
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  circleView: {
    width: 25,
    height: 25,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomEndRadius: 25,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#00f",
  },
  todoRowTitle: {
    flex: 3,
    paddingLeft: 10,
  },
  selected: {
    backgroundColor: "#00f",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedText: {
    textDecorationLine: "line-through",
  },
  checkMark: {
    color: "#fff",
    fontWeight: "bold",
  },
});
