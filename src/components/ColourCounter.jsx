import React from "react";
import { Text, View, Button } from "react-native";

const ColourCounter = ({ colour }) => {
  return (
    <View>
      <Text>{colour}</Text>
      <Button title={`Increase ${colour}`} />
      <Button title={`Decrease ${colour}`} />
    </View>
  );
};

export default ColourCounter;
