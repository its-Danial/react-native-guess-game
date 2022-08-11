import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../../helpers/constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

type GameOverScreenProps = {};

const GameOverScreen: FC<GameOverScreenProps> = (props) => {
  const startNewGamePressHandler = () => {};
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        You device needed <Text style={styles.highlightText}>X</Text> rounds to guess the number{" "}
        <Text style={styles.highlightText}>Y</Text>{" "}
      </Text>
      <PrimaryButton onPress={startNewGamePressHandler}>Start New Game</PrimaryButton>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "FiraCode-Regular",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  highlightText: {
    fontFamily: "FiraCode-Bold",
    color: Colors.primary600,
  },
});
