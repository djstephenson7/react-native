import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const navigate = navigation.navigate;

  return (
    <View>
      <Text style={styles.text}>React Native Home Screen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <Button title="Go to List Demo" onPress={() => navigate("List")} />
      <Button title="Go to Image Screen" onPress={() => navigate("Image")} />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigate("Counter")}
      />
      <Button title="Go to Colour Screen" onPress={() => navigate("Colour")} />
      <Button title="Go to Square Screen" onPress={() => navigate("Square")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
