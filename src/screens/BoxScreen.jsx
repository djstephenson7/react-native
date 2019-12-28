import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxStyleOne} />
      <View style={styles.boxStyleTwo} />
      <View style={styles.boxStyleThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  boxStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  boxStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    marginTop: 50
  },
  boxStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: 'blue'
  }
});

export default BoxScreen;
