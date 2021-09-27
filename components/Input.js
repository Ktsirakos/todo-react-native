import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const Input = (props) => {
  const [text, onChangeText] = React.useState("");

  const sendText = () => {
    props.onAdd(text);
    onChangeText("");
  };

  return (
    <View style={styles.mainContainer}>
      <Text>{props.title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <Button
        style={styles.button}
        title="Add"
        disabled={text == "" ? true : false}
        onPress={() => sendText()}
      ></Button>
    </View>
  );
};
  
export const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    flex: 1,
  },
  input: {
    flex: 3,
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export { Input };
