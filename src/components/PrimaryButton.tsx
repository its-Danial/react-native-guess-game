import { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

type PrimaryButtonProps = {
  children: React.ReactNode;
};

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return (
    <Pressable style={({ pressed }) => (pressed ? [styles.pressable, styles.pressed] : styles.pressable)}>
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 28,
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
