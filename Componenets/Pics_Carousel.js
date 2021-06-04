import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import pic1 from "../assets/favicon.png";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = () => (
  <View style={{ flex: 1 }}>
    <Image
      source={require("../assets/home-slider-1.jpg")}
      style={{ height: "400px", width: "100%", objectFit: "contain" }}
    />
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: "42px", fontWeight: "bold" }}>
        BECAUSE THEY NEED YOUR HELP
      </Text>
      <Text style={{ color: "gray", fontSize: "30px", fontWeight: "500" }}>
        DO NOT LET THEM DOWN
      </Text>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 0,
          width: "10%",
          height: 40,
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        {" "}
        <Button>DONATE NOW</Button>
      </View>

      <Button style={{ backgroundColor: "white", borderRadius: "0px" }}>
        REQUEST NOW
      </Button>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></View>
  </View>
);
export default MyComponent;
