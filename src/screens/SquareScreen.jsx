import React, { useState } from "react";
import { View } from "react-native";
import ColourCounter from "../components/ColourCounter";

const colourIncrement = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColour = (colour, change) => {
    switch (colour) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
    }
  };

  console.log("Red: " + red);
  console.log("Blue: " + blue);
  console.log("Green: " + green);

  return (
    <View>
      <ColourCounter
        onIncrease={() => setColour("red", colourIncrement)}
        onDecrease={() => setColour("red", -1 * colourIncrement)}
        colour="Red"
      />
      <ColourCounter
        onIncrease={() => setColour("blue", colourIncrement)}
        onDecrease={() => setColour("blue", -1 * colourIncrement)}
        colour="Blue"
      />
      <ColourCounter
        onIncrease={() => setColour("green", colourIncrement)}
        onDecrease={() => setColour("green", -1 * colourIncrement)}
        colour="Green"
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;
