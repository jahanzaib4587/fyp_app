import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import image from "../assets/home-slider-2.jpg";
const PictureCard = ({ backgroundImage, heading, bottomText }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.headingText}>{heading}</Text>
        <Text style={styles.bottomText}>{bottomText}</Text>
      </ImageBackground>
    </View>
  );
};

export default PictureCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "hidden",
    margin: "10px",
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  headingText: {
    padding: "10px",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  bottomText: {
    padding: "10px",
    color: "white",
    fontSize: 12,

    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
