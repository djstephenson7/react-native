import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const connect = [
    { name: "Makon", age: 31 },
    { name: "Veera", age: 44 },
    { name: "Ronnie", age: 38 },
    { name: "Suhael", age: 56 },
    { name: "Franco", age: 32 },
    { name: "Sarah", age: 34 },
    { name: "James", age: 39 },
    { name: "Gary", age: 33 }
  ];

  return (
    <FlatList
      data={connect}
      keyExtractor={connect => connect.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyles}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyles: {
    marginVertical: 50
  }
});

export default ListScreen;
