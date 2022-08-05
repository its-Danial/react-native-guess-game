import { FC, useState } from "react";
import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";

type StartGameScreenProps = {};

const StartGameScreen: FC<StartGameScreenProps> = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const onEnteredText = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmPressHandler = () => {
    console.log("confirm");
  };

  const resetPressHandler = () => {
    console.log("reset");
  };

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.inputContainer}>
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
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: { opacity: 0.15 },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3e0329",
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
    fontWeight: "bold",
    textAlign: "center",
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
  },
});
