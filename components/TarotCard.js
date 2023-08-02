import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const TarotCard = (props) => {
  let pictureSource = "../assets/tarot card/" + props.cardName + ".png";
  console.log(pictureSource);

  return (
    <View key={props.id} style={styles.container}>
      <Image
        style={{width: 100}}
        source={require("../assets/tarot card/Ace of Cups.png")}
      />
      <Text style={styles.title}> {props.cardName} </Text>
      <Text style={styles.title}> {props.type} </Text>
      <Text style={styles.title}> {props.category} </Text>
      <Text style={styles.title}> {props.uprightPoints} </Text>
      <Text style={styles.title}> {props.reversedPoints} </Text>
    </View>
  );
};

export default TarotCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    width: "98%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#C8CBFE",
  },
  title: {
    color: "#f8fcff",
    fontWeight: 700,
    fontSize: 25,
  },
});
