import { FC, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Colors from "../../helpers/constants/Colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

type StartGameScreenProps = {
  onPickNumber: (pickedNumber: number) => void;
};

const StartGameScreen: FC<StartGameScreenProps> = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const onEnteredText = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmPressHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      //show alert
      Alert.alert("Invalid Number", "Number has to be a number between 1 and 99", [
        { text: "Okay", style: "default", onPress: resetPressHandler },
      ]);

      return;
    } else {
      props.onPickNumber(chosenNumber);
    }
  };

  const resetPressHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.container}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={onEnteredText}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetPressHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmPressHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: { flex: 1 },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    textAlign: "center",
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontFamily: "FiraCode-Regular",
  },
});
