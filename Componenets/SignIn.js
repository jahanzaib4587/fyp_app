import React from "react";
import AppBarComponent from "./ActionBar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView>
      <AppBarComponent title="Log In" />
      <View>
        <Text>this is sign</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
