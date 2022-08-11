import { FC } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../../helpers/constants/Colors";

type CardProps = {
  children: React.ReactNode;
};

const Card: FC<CardProps> = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  card: {
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
});
