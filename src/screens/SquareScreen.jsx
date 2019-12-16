import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ColourCounter from "../components/ColourCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColourCounter colour="Red" />
      <ColourCounter colour="Blue" />
      <ColourCounter colour="Green" />
    </View>
  );
};

export default SquareScreen;
