import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PictureHeader from "../Componenets/PictureHeader";
import BottomBar from "../Componenets/BottomBar";
const About = () => {
  return (
    <ScrollView>
      <PictureHeader
        showButton={false}
        heading="contact us"
        bottomText="Congtact US to help needy people"
      />
      <BottomBar />
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({});
