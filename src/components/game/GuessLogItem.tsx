import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../helpers/constants/Colors";

type GuessLogItemProps = {
  guessNumber: number;
  roundNumber: number;
};

const GuessLogItem: FC<GuessLogItemProps> = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundNumber}</Text>
      <Text style={styles.itemText}>Opponents Guess: {props.guessNumber}</Text>
    </View>
  );
};
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "FiraCode-Regular",
  },
});
