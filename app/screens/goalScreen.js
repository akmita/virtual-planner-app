import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import List from "../components/List";

// figure out local storage later
// import AsyncStorage from "@react-native-async-storage/async-storage";

// create a path you want to write to
// :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
//var path = RNFS.DocumentDirectoryPath + "/test.txt";

// all goals store here temporarily
var goalsObj = [
  {
    id: 0,
    name: "learn react",
    reason: "100k a year",
    milestones: [
      {
        id: 1000,
        name: "learn hook methods",
      },
      {
        id: 1001,
        name: "look at other people's react apps",
      },
    ],
  },
  {
    id: 1,
    name: "refine portfolio",
    reason: "to look better for recruiters = better job",
    milestones: [
      {
        id: 1000,
        name: "add documentation",
      },
      {
        id: 1001,
        name: "refine code, make it look nice",
      },
    ],
  },
];

// rsf
class GoalScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/blueBackground.png")}
      >
        <List goals={goalsObj} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default GoalScreen;
