import { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    maxWidth: "80%",

    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 38 : 36,
    fontFamily: "FiraCode-Bold",
  },
});
