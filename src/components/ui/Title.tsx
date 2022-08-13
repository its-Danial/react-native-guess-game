import { FC } from "react";
import { StyleSheet, Text } from "react-native";

type TitleProps = {
  children: React.ReactNode;
};

const Title: FC<TitleProps> = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 12,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    fontFamily: "FiraCode-Bold",
    maxWidth: "80%",
    width: 300,
  },
});
