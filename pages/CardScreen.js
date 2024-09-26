import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import TarotCard from "../components/TarotCard";
import TopBar from "../components/TopBar";

const CardScreen = ({ route }) => {
  const category = route.params.category;
  const cards = route.params.cards;
  console.log("Cards: ", cards);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background4.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ flex: 1, flexDirection: "column", marginTop: 5 }}>
          <TopBar title={category} />
          <View style={{ flex: 1, marginTop: "5%" }}>
            <FlatList
              data={cards}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={(itemData) => {
                itemData.index;
                return (
                  <View style={{ flex: 1, margin: 5 }}>
                    <TarotCard
                      id={itemData.item.id}
                      cardName={itemData.item.cardName}
                      type={itemData.item.cardType}
                      category={itemData.item.cardCategory}
                      uprightPoints={itemData.item.uprightPoints}
                      reversedPoints={itemData.item.reversedPoints}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#585A59",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    color: "#A99479",
    textAlign: "center",
    marginTop: 50,
  },
});
