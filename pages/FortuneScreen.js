import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import CategoryButton from "../components/CategoryButton";
import TopBar from "../components/TopBar";
import { cards } from "../Data";
import TarotCard from "../components/TarotCard";
import { useEffect, useState } from "react";
import { generateResponse } from "../ChatGPTService";

const FortuneScreen = () => {
  let fortuneCards = [];
  let card = [];
  let cardSameID = [];

  const [cardContent, setCardContent] = useState({});
  const [displayGenerateBtn, setDisplayGenerateBtn] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState(
    "Name me 3 famous Malaysian cuisines"
  );

  useEffect(() => {
    //console.log("cardContent useEffect: ", cardContent);
    if (cardContent.hasOwnProperty("card")) {
      console.log(
        "cardContent.card.map((card)=>{return card.id}): ",
        cardContent.card.map((card) => {
          return card.id;
        })
      );
      cardSameID.push(
        cardContent.card.map((card) => {
          return card.id;
        })
      );
      console.log("cardSameID: ", cardSameID);
      console.log("cardContent.card[0].id useEffect: ", cardContent.card[0].id);
    } else {
      console.log("cardContent empty: ", cardContent);
    }
  }, [cardContent]);

  function randomCard() {
    let cardID = Math.floor(Math.random() * 78) + 1;
    //position 1 = upright; 2 = reversed
    let position = Math.floor(Math.random() * 2) + 1;

    return {
      id: cardID,
      position: position === 1 ? "upright" : "reversed",
    };
  }

  function removeDuplicates() {
    card.filter((item, index) => fortuneCards.indexOf(item.cardID) === index);
  }

  function insertCard() {
    card.push(randomCard());
  }

  function pressHandler() {
    fortuneCards = [];
    card = [];
    for (let i = 0; i < 6; i++) {
      removeDuplicates();
      insertCard();
      removeDuplicates();
    }
    setCardContent({
      card: card.map((carddd) => {
        return cards.find((cardd) => cardd.id === carddd.id);
      }),
      position: card.map((carddd) => {
        return carddd.position;
      }),
    });
    setDisplayGenerateBtn(true);
    //console.log("Card contents: ", cardContent);
  }

  function generateReadingPressHandler() {
    console.log("Generating reading");
    sendMessage();
    console.log("Message: ", messages);
  }

  const sendMessage = async () => {
    if (!userInput) return;

    setMessages((prevMessages) => [...prevMessages, `User: ${userInput}`]);
    const botResponse = await generateResponse(userInput);
    setMessages((prevMessages) => [...prevMessages, `ChatGPT: ${botResponse}`]);
    setUserInput("");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background4.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <TopBar title="Fortune Telling" />
        <ScrollView>
          <CategoryButton title="Start" onPress={pressHandler} />
          {/* {displayGenerateBtn === true && (
            <CategoryButton
              title="Generate Reading"
              onPress={generateReadingPressHandler}
            />
          )} */}

          <View style={{ flex: 1, flexDirection: "column", marginTop: 5 }}>
            <View style={{ flex: 1, marginTop: "5%" }}>
              <FlatList
                data={cardContent.card}
                renderItem={(itemData) => {
                  itemData.index;
                  return (
                    <>
                      <View style={{ flex: 1, margin: 5 }}>
                        <TarotCard
                          id={itemData.item.id}
                          cardName={itemData.item.cardName}
                          type={itemData.item.cardType}
                          category={itemData.item.cardCategory}
                          position={cardContent.position[itemData.index]}
                          uprightPoints={itemData.item.uprightPoints}
                          reversedPoints={itemData.item.reversedPoints}
                        />
                      </View>
                    </>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default FortuneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
