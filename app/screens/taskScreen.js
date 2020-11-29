import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListMilestones from "../components/ListMilestones";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

function ListTasks(props) {
  const navigation = useNavigation();

  // change goal to element, since this will be reused
  return props.ms.map((milstn) => {
    return (
      <View style={styles.list}>
        <Text
          style={{ backgroundColor: "salmon", flexGrow: 30, height: 40 }}
          key={milstn.id}
          onPress={() => console.log("todo")}
        >
          {milstn.name}
        </Text>
      </View>
    );
  });
}

function TaskScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/blueBackground.png")}
    >
      <ListTasks></ListTasks>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default TaskScreen;
