import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../../helpers/randomNumber";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

type GameScreenProps = {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<GameScreenProps> = (props) => {
  const initialNumber = generateRandomBetween(1, 100, props.userNumber);
  const [guessRounds, setGuessRounds] = useState([initialNumber]);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction == "lower" && currentGuess < props.userNumber) ||
      (direction == "greater" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong..", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevState) => {
      return [newRandomNumber, ...prevState];
    });
  };

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.container}>
      {/* Box to show computer generated guess number */}
      <Title>Opponents guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.flatListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(item) => (
            <GuessLogItem roundNumber={guessRoundsListLength - item.index} guessNumber={item.item} />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 18,
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  },
});
