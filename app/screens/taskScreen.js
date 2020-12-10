import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import EditTask from "./editTasks";
import List from "../components/List";

function TaskScreen({ route, navigation }) {
  var { milestone } = route.params;

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/blueBackground.png")}
    >
      <List goals={milestone.tasks} dest="EditTasks" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  list: {
    paddingTop: 5,
    flexDirection: "row",
    opacity: 0.8,
  },
});

export default TaskScreen;
