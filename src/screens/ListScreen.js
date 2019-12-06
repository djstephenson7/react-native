import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const connect = [
    { name: "Makon" },
    { name: "Veera" },
    { name: "Ronnie" },
    { name: "Suhael" },
    { name: "Franco" },
    { name: "Sarah" },
    { name: "James" },
    { name: "Gary" }
  ];

  return (
    <FlatList
      data={connect}
      keyExtractor={connect => connect.name}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default ListScreen;
