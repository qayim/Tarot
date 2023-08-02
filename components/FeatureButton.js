import React, { Component } from "react";
import { Text, StyleSheet, View, Pressable, Dimensions, Image } from "react-native";

const deviceHeight = Dimensions.get("screen").height;
const deviceWidth = Dimensions.get("screen").width;

const FeatureButton = (props) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Image
          style={{ width: deviceHeight * 0.05, height: deviceHeight * 0.05 }}
          source={props.label}
        />
      </View>
    </Pressable>
  );
};

export default FeatureButton;



const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: deviceWidth*0.3,
    height: deviceHeight*0.09,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: deviceHeight*0.01,
    marginHorizontal: deviceWidth*0.01,
    padding: deviceHeight*0.015,
    backgroundColor: "#F3CAF5",
  },
  title: {
    color: "#f8fcff",
    fontWeight: 500,
    fontSize: 12,
    textAlign: 'center',
  },
});
