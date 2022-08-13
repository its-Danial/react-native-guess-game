import { FC } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Colors from "../../helpers/constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

type GameOverScreenProps = {
  pickedNumber: number;
  guessRounds: number;
  onStartNewGame: () => void;
};

const GameOverScreen: FC<GameOverScreenProps> = (props) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 130;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require("../../assets/images/success.png")} />
        </View>
        <Text style={styles.summaryText}>
          You device needed <Text style={styles.highlightText}>{props.guessRounds}</Text> rounds to guess the number{" "}
          <Text style={styles.highlightText}>{props.pickedNumber}</Text>{" "}
        </Text>
        <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};
export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
