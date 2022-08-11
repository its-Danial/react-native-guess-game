import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../../helpers/constants/Colors";

type InstructionTextProps = {
  children: React.ReactNode;
  style?: object;
};

const InstructionText: FC<InstructionTextProps> = (props) => {
  return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>;
};
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 22,
    fontFamily: "FiraCode-Regular",
  },
});
