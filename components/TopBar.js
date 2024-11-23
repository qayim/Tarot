import React, { Component } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

const TopBar = (props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Text style={styles.title}> {props.title} </Text>
    </Pressable>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: "98%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "7%",
  },
  title: {
    color: "#F0CA4A",
    fontWeight: "700",
    fontSize: 25,
  },
});
