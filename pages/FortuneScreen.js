import { View, StyleSheet, Text } from "react-native";
import { cards } from "../Data";

const FortuneScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default FortuneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
