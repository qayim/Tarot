import React, { Component } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

const CategoryButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View
        style={
          props.title === "Fortune Telling"
            ? styles.containerFortune
            : props.title === "Reading Aid" ? styles.containerReadingAid : styles.container
        }
      >
        <Text
          style={
            props.title === "Fortune Telling"
              ? styles.textFortune
              : props.title === "Reading Aid" ? styles.textReadingAid : styles.text
          }
        >
          {" "}
          {props.title}{" "}
        </Text>
      </View>
    </Pressable>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#EDBE28",
    backgroundColor: "#000000",
    padding: 30,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#EDBE28",
  },
  containerFortune: {
    borderRadius: 20,
    borderWidth: 5,
    borderStyle: "dashed",
    borderColor: "#EAEAEA",
    padding: 30,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textFortune: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#EAEAEA",
  },

  containerReadingAid: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#EAEAEA",
    backgroundColor: "#EAEAEA",
    padding: 30,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textReadingAid: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});
