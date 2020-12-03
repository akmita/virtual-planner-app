import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import EditTask from "./editTasks";

function ListTasks(props) {
  const navigation = useNavigation();

  return props.milestone.tasks.map((task) => {
    return (
      <View style={styles.list} key={task.id}>
        <Text
          style={{ backgroundColor: "salmon", flexGrow: 30, height: 40 }}
          key={task.id}
          onPress={() => {
            navigation.navigate("EditTasks", { task: task });
          }}
        >
          {task.name}
        </Text>
      </View>
    );
  });
}

function TaskScreen({ route, navigation }) {
  var { milestone } = route.params;

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/blueBackground.png")}
    >
      <ListTasks milestone={milestone}></ListTasks>
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
