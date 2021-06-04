import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button_Component from "./Button_Component";
const PictureHeader = ({ showButton, heading, bottomText }) => {
  return (
    <View>
      <Image
        source={require(".././assets/home-slider-1.jpg")}
        style={{ height: "400px", width: "100%", objectFit: "contain" }}
      />
      <View
        style={{
          position: "absolute",
          top: 200,
          left: 0,
          right: 0,
          bottom: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "42px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: "30px",
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          {bottomText}
        </Text>
        {showButton && (
          <>
            <Button_Component value="DONATE NOW" />
            <Button_Component value="REQUEST NOW" />
          </>
        )}
      </View>
    </View>
  );
};

export default PictureHeader;

const styles = StyleSheet.create({});
