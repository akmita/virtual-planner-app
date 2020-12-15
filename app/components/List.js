// change this to listgoals

import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

// contains list items
function List(props) {
  const navigation = useNavigation();

  // event handlers for switching to next screen
  function handlePress(genericGoal) {
    if (props.dest == "Milestones") {
      console.log("navigating to milestones using List.js");
      navigation.navigate(props.dest, {
        goal: genericGoal,
      });
    } else if (props.dest == "Tasks") {
      console.log("navigating to tasks using List.js");
      navigation.navigate(props.dest, {
        milestone: genericGoal,
      });
    } else if (props.dest == "EditTasks") {
      console.log("navigating to editTask using List.js");
      navigation.navigate(props.dest, {
        task: genericGoal,
      });
    }
  }

  // renders list items
  return props.goals.map((element) => {
    return (
      <TouchableNativeFeedback style={styles.list} key={element.id}>
        <Text
          style={{ backgroundColor: "salmon", flexGrow: 30, height: 40 }}
          onPress={() => handlePress(element)}
        >
          {element.name}
        </Text>
      </TouchableNativeFeedback>
    );
  });
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 5,
    flexDirection: "row",
    opacity: 0.8,
  },
});

export default List;
