import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = ({ heading, bottomText }) => {
  return (
    <View style={styles.cardBackground}>
      <Text>{heading}</Text>
      <Text>{bottomText}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardBackground: {
    height: "200px",
    width: "200px",
    backgroundColor: "blue",
    borderRadius: 20,
    display: "flex",

    justifyContent: "center",
    padding: "10px",
    margin: "20px",
    alignItems: "center",
  },
});
