import React, { Component, useState, useContext } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FavoritesContext } from "../store/context/context-file";

const TarotCard = (props) => {
  const favoriteCardsCtx = useContext(FavoritesContext);
  const favoriteCardsIds = favoriteCardsCtx.ids;
  let uprightPoints = props.uprightPoints;
  let uprightPoints1 = [uprightPoints[0], uprightPoints[1], uprightPoints[2]];
  let uprightPoints2 = [uprightPoints[3], uprightPoints[4], uprightPoints[5]];
  let reversedPoints = props.reversedPoints;
  let reversedPoints1 = [reversedPoints[0], reversedPoints[1], reversedPoints[2]];
  let reversedPoints2 = [reversedPoints[3], reversedPoints[4], reversedPoints[5]];
  let upDesc = props.upDesc;
  let revDesc = props.revDesc;
  
  const cardIsFavorite = favoriteCardsIds.includes(props.id);

  let position; 
  let positionStyle;
  let desc;

    function changeFavoriteStatusHandler() {
      if (cardIsFavorite) {
        favoriteCardsCtx.removeFavorite(props.id);
        console.log("Remove favorite: " + props.id);
      } else {
        favoriteCardsCtx.addFavorite(props.id);
        console.log("Add favorite: " + props.id);
      }
      console.log("Fav button hit");
      console.log(favoriteCardsIds);
      console.log(cardIsFavorite);
    }

  const [descView, setDescView] = useState(false);

  function showDesc(){
    setDescView(!descView);
    console.log(descView);
  }

  if(props.position === 'upright'){
    positionContainerStyle = {
      borderRadius: 20,
      borderWidth: 10,
      borderColor: "#D9B587",
      backgroundColor: "#000000",
      padding: 30,
      marginVertical: 10,
      width: "98%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    };
    positionStyle = {
      color: "#D9B587",
      fontWeight: "700",
      fontSize: 30,
    };
    position = (
      <View>
        <Text style={styles.uprightLabel}>Up Right</Text>
        <View style={{ flexDirection: "row" }}>
          {uprightPoints1.map((points) => {
            return (
              <View style={styles.uprightPointsView} >
                <Text style={styles.uprightPoints}> {points} </Text>
              </View>
            );
          })}
        </View>
        <View style={{ flexDirection: "row" }}>
          {uprightPoints2.map((points) => {
            return (
              <View style={styles.uprightPointsView}>
                <Text style={styles.uprightPoints}> {points} </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  } else if (props.position === "reversed"){
    positionContainerStyle = {
      borderRadius: 20,
      borderWidth: 10,
      borderColor: "#889094",
      backgroundColor: "#000000",
      padding: 30,
      marginVertical: 10,
      width: "98%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    };
    positionStyle = {
      color: "#889094",
      fontWeight: "700",
      fontSize: 30,
    };
    position = (
      <View>
        <Text style={styles.reversedLabel}>Reversed</Text>
        <View style={{ flexDirection: "row" }}>
          {reversedPoints1.map((points) => {
            return (
              <View style={styles.reversedPointsView}>
                <Text style={styles.reversedPoints}> {points} </Text>
              </View>
            );
          })}
        </View>
        <View style={{ flexDirection: "row" }}>
          {reversedPoints2.map((points) => {
            return (
              <View style={styles.reversedPointsView}>
                <Text style={styles.reversedPoints}> {points} </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  } else{
      position = (
        <View>
          <Text style={styles.uprightLabel}>Up Right</Text>
          <View style={{ flexDirection: "row" }}>
            {uprightPoints1.map((points) => {
              return (
                <View style={styles.uprightPointsView} >
                  <Text style={styles.uprightPoints}> {points} </Text>
                </View>
              );
            })}
          </View>
          <View style={{ flexDirection: "row" }}>
            {uprightPoints2.map((points) => {
              return (
                <View style={styles.uprightPointsView}>
                  <Text style={styles.uprightPoints}> {points} </Text>
                </View>
              );
            })}
          </View>
            <Text style={styles.reversedLabel}>Reversed</Text>
            <View style={{ flexDirection: "row" }}>
              {reversedPoints1.map((points) => {
                return (
                  <View style={styles.reversedPointsView}>
                    <Text style={styles.reversedPoints}> {points} </Text>
                  </View>
                );
              })}
            </View>
            <View style={{ flexDirection: "row" }}>
              {reversedPoints2.map((points) => {
                return (
                  <View style={styles.reversedPointsView}>
                    <Text style={styles.reversedPoints}> {points} </Text>
                  </View>
                );
              })}
            </View>
        </View>
      );

      desc = (
        <View>
          <Text style={styles.uprightLabel}>Up Right</Text>
          <View style={styles.upDescView}>
            <Text style={styles.upDescText}>{upDesc}</Text>
          </View>
          <Text style={styles.reversedLabel}>Reversed</Text>
          <View style={styles.revDescView}>
            <Text style={styles.revDescText}>{revDesc}</Text>
          </View>
        </View>
      );
  }
    return (
      <Pressable onPress={showDesc} onLongPress={changeFavoriteStatusHandler}>
        <View
          key={props.id}
          style={cardIsFavorite ? styles.containerFavorite : props.position ? positionContainerStyle : styles.container}
        >
          <Text style={props.position ? positionStyle : styles.cardName}>
            {" "}
            {props.cardName}{" "}
          </Text>
          <Text style={styles.type}> {props.type} </Text>
          <Text style={styles.category}> {props.category} </Text>
          {descView ? desc : position}
        </View>
      </Pressable>
    );
};

export default TarotCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "#A99479",
    backgroundColor: "#000000",
    padding: 30,
    marginVertical: 10,
    width: "98%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  containerFavorite: {
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "#f0f7ee",
    backgroundColor: "#f0f7ee",
    padding: 30,
    marginVertical: 10,
    width: "98%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "100%",
    padding: 50,
  },
  cardName: {
    color: "#D9B587",
    fontWeight: "700",
    fontSize: 30,
  },
  type: {
    color: "#60594D",
    fontWeight: "700",
    fontSize: 20,
  },
  category: {
    color: "#60594D",
    fontWeight: "700",
    fontSize: 15,
  },
  uprightLabel: {
    color: "#D9B587",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    margin: 4,
  },
  uprightPointsView: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
    margin: 1,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#D9B587",
    width: 120,
    height: 50,
  },
  uprightPoints: {
    color: "#D9B587",
    fontWeight: "700",
    fontSize: 10,
  },
  upDescView: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 2,
    margin: 5,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#D9B587",
    width: 320,
    //height: 200,
  },
  upDescText: {
    color: "#D9B587",
    fontWeight: "700",
    fontSize: 30,
  },
  reversedLabel: {
    color: "#889094",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    margin: 4,
  },
  reversedPointsView: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
    margin: 1,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#889094",
    width: 120,
    height: 50,
  },
  reversedPoints: {
    color: "#889094",
    fontWeight: "700",
    fontSize: 10,
  },
  revDescView: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 2,
    margin: 5,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#889094",
    width: 320,
    //height: 200,
  },
  revDescText: {
    color: "#889094",
    fontWeight: "700",
    fontSize: 30,
  },
});
