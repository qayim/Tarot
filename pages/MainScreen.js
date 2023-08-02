import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { cards } from "../Data";
import TopBar from "../components/TopBar";
import FeatureButton from "../components/FeatureButton";
import TarotCard from "../components/TarotCard";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar title="Destiny's Cards" />
      <View style={{ flex: 1, flexDirection: "column", marginTop: 5 }}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <FeatureButton label={require("../assets/icon/fortune.png")} />
          <FeatureButton label={require("../assets/icon/tarot.png")} />
          <FeatureButton label={require("../assets/icon/cups.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <FeatureButton label={require("../assets/icon/swords.png")} />
          <FeatureButton label={require("../assets/icon/pentacle.png")} />
          <FeatureButton label={require("../assets/icon/wand.png")} />
        </View>
        <View style={{ flex: 1, marginTop: "5%" }}>
          <FlatList
            data={cards}
            renderItem={(itemData) => {
              itemData.index;
              return (
                <TarotCard
                  id={itemData.item.id}
                  cardName={itemData.item.cardName}
                  type={itemData.item.cardType}
                  category={itemData.item.cardCategory}
                  uprightPoints={itemData.item.uprightPoints}
                  reversedPoints={itemData.item.reversedPoints}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BA0FB",
  },
});
