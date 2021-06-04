import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ContactDeatail from "./ContactDeatail";

const BottomBar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingText}>About US</Text>
        <View style={styles.horizontalBorder} />
        <Text style={styles.paragraphText}>
          Lorem ispum jhbdcd jdbjas asdb hdsjsdabsjad sadjsabdjsa dsajdbashd kjb
        </Text>
        <Text style={styles.secondParagraphText}>
          Lorem ispum jhbdcd jdbjas asdb hdsjsdabsjad sadjsabdjsa dsajdbashd kjb
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.firstInputs}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e)}
        />
        <TextInput
          style={styles.firstInputs}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e)}
        />
        <TextInput
          style={styles.message}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e)}
        />
        <View style={styles.buttonWrapper}>
          <Button color="yellow" title="SEND MESSAGE" />
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 200,
  },
  headingText: {
    textTransform: "uppercase",
    color: "white",
  },
  horizontalBorder: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  paragraphText: {
    lineHeight: 1.6,
    color: "white",
  },
  secondParagraphText: {
    lineHeight: 1.6,
    color: "white",
    marginTop: 30,
  },
  firstInputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "yellow",
    border: "2px solid white",
  },
  message: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "yellow",
    border: "2px solid white",
  },
  buttonWrapper: {
    width: 200,
    border: "2px solid white",
  },
});
