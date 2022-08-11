import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../helpers/constants/Colors";

type NumberContainerProps = {
  children: React.ReactNode;
};

const NumberContainer: FC<NumberContainerProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "FiraCode-Bold",
  },
});
