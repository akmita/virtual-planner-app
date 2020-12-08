import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import List from "../components/List";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        tasks: [
          {
            id: 2041,
            name: "drink coffee",
            reason: "because I said so",
          },
          {
            id: 2031,
            name: "drink coffee",
            reason: "because I said so",
          },
        ],
      },
      {
        id: 1003,
        name: "look at other people's react apps",
        tasks: [
          {
            id: 2032,
            name: "eat water",
            reason: "because I said so",
          },
          {
            id: 2021,
            name: "eat water",
            reason: "because I said so",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "refine portfolio",
    reason: "to look better for recruiters = better job",
    milestones: [
      {
        id: 1004,
        name: "add documentation",
        tasks: [
          {
            id: 2011,
            name: "drink banannas",
            reason: "because I said so",
          },
          {
            id: 2010,
            name: "eat water",
            reason: "because I said so",
          },
        ],
      },
      {
        id: 1005,
        name: "refine code, make it look nice",
        tasks: [
          {
            id: 2000,
            name: "sleep with a stuffed bear",
            reason: "because I said so",
          },
          {
            id: 2001,
            name: "eat water",
            reason: "because I said so",
          },
        ],
      },
    ],
  },
];

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    console.log("storage value: " + value);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    console.log(e);
  }
};

// rsf
class GoalScreen extends React.Component {
  render() {
    storeData("hail satan");
    getData();
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/blueBackground.png")}
      >
        <Text style={{ color: "white" }}></Text>
        <List goals={goalsObj} dest="Milestones" />
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
