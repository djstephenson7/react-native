import React, { useReducer } from "react";
import { View } from "react-native";
import ColourCounter from "../components/ColourCounter";

const colourIncrement = 15;

const reducer = (state, action) => {
  switch (action.colourToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColourCounter
        onIncrease={() =>
          dispatch({ colourToChange: "red", amount: colourIncrement })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "red", amount: colourIncrement * -1 })
        }
        colour="Red"
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ colourToChange: "blue", amount: colourIncrement })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "blue", amount: colourIncrement * -1 })
        }
        colour="Blue"
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ colourToChange: "green", amount: colourIncrement })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "green", amount: colourIncrement * -1 })
        }
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
