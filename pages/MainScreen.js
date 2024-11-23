import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { cards } from "../Data";
import TopBar from "../components/TopBar";
import CategoryButton from "../components/CategoryButton";
import { FavoritesContext } from "../store/context/context-file";

const MainScreen = ({ navigation }) => {
  const favoriteCardsCtx = useContext(FavoritesContext);
  const favoriteCardsIds = favoriteCardsCtx.ids;

  console.log("favoriteCardsIds: ", favoriteCardsIds);


  let favI = cards.map((card) => {
    if (favoriteCardsIds.includes(card.id)) {
      return card;
    } else {
      return;
    }
  });
  
  console.log("favI: ", favI.sort(
    (a, b) => favoriteCardsIds.indexOf(a.id) - favoriteCardsIds.indexOf(b.id)
  ))

  favI = favI.sort(
    (a, b) => favoriteCardsIds.indexOf(a.id) - favoriteCardsIds.indexOf(b.id)
  );

  

//console.log("favII: " , favII)

  let cupsI = cards.map((card) => {
    if (card.cardCategory === "Cups") {
      return card;
    } else {
      return;
    }
  });
  let wandsI = cards.map((card) => {
    if (card.cardCategory === "Wands") {
      return card;
    } else {
      return;
    }
  });
  let swordsI = cards.map((card) => {
    if (card.cardCategory === "Swords") {
      return card;
    } else {
      return;
    }
  });
  let pentaclesI = cards.map((card) => {
    if (card.cardCategory === "Pentacles") {
      return card;
    } else {
      return;
    }
  });
  let majorI = cards.map((card) => {
    if (card.cardCategory === "Major") {
      return card;
    } else {
      return;
    }
  });

  let favs = favI.filter(function (element) {
    return element !== undefined;
  });
  let cups = cupsI.filter(function (element) {
    return element !== undefined;
  });
  let wands = wandsI.filter(function (element) {
    return element !== undefined;
  });
  let swords = swordsI.filter(function (element) {
    return element !== undefined;
  });
  let pentacles = pentaclesI.filter(function (element) {
    return element !== undefined;
  });
  let major = majorI.filter(function (element) {
    return element !== undefined;
  });
function pressHandlerReadingAid() {
  navigation.navigate("Card", {
    category: "Reading Aid",
    cards: favs,
  });
}
  function pressHandlerCups() {
    navigation.navigate("Card", {
      category: "Cups",
      cards: cups,
    });
  }
  function pressHandlerWands() {
    navigation.navigate("Card", {
      category: "Wands",
      cards: wands,
    });
  }
  function pressHandlerSwords() {
    navigation.navigate("Card", {
      category: "Swords",
      cards: swords,
    });
  }
  function pressHandlerPentacles() {
    navigation.navigate("Card", {
      category: "Pentacles",
      cards: pentacles,
    });
  }
  function pressHandlerMajor() {
    navigation.navigate("Card", {
      category: "Major",
      cards: major,
    });
  }
  function pressHandlerFortune() {
    navigation.navigate("Fortune", {
      category: "Fortune",
    });
  }
  // console.log("Cups", cups);
  // console.log("Wands", wands);
  // console.log("Swords", swords);
  // console.log("Pentacles", pentacles);
  // console.log("Major", major);
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/background4.png")}>
        <TopBar title="Destiny's Cards" onPress={pressHandlerFortune} />
        <CategoryButton title="Reading Aid" onPress={pressHandlerReadingAid} />
        <ScrollView>
          <CategoryButton title="Cups" onPress={pressHandlerCups} />
          <CategoryButton title="Wands" onPress={pressHandlerWands} />
          <CategoryButton title="Swords" onPress={pressHandlerSwords} />
          <CategoryButton title="Pentacles" onPress={pressHandlerPentacles} />
          <CategoryButton title="Major" onPress={pressHandlerMajor} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
