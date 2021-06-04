import * as React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Avatar, Button } from "react-native-paper";
import CardComponent from "../Componenets/Card";

import PictureCard from "../Componenets/PictureCard";
import PictureHeader from "../Componenets/PictureHeader";

const MyComponent = () => (
  <ScrollView>
    <PictureHeader
      showButton={true}
      heading="BECAUSE THEY NEED YOUR HELP"
      bottomText="DO NOT LET THEM DOWN"
    />
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardComponent
          heading="helo i a heaidng 1"
          bottomText="i am bottom text 1"
        />
        <CardComponent
          heading="helo i a heaidng 1"
          bottomText="i am bottom text 1"
        />
        <CardComponent
          heading="helo i a heaidng 1"
          bottomText="i am bottom text 1"
        />
        <CardComponent
          heading="helo i a heaidng 1"
          bottomText="i am bottom text 1"
        />
      </View>
      <View style={styles.twoCardHolder}>
        <PictureCard
          heading="helo i am heading"
          bottomText="i am bottom text"
        />
        <PictureCard
          heading="helo i am heading"
          bottomText="i am bottom text"
        />
      </View>
    </View>
  </ScrollView>
);
export default MyComponent;
const styles = StyleSheet.create({
  twoCardHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardAlignment: {
    marginRight: "10px",
  },
});
