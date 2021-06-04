import React from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

const Button_Component = ({ value }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.appButtonText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button_Component;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 0,
    width: "10%",
    height: 50,
    marginBottom: "20px",
    marginTop: "10px",
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  appButtonText: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
