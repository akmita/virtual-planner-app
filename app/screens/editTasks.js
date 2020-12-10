import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

function EditTasks({ navigation, route }) {
  var { task } = route.params;

  return (
    <View>
      <View>
        <TextInput style={styles.input}>{task.name}</TextInput>
      </View>
      <View>
        <TouchableNativeFeedback
          style={styles.button}
          onPress={console.log("edit the thing")}
        >
          <Text>Update</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    height: 30,
    marginBottom: 15,
    backgroundColor: "lightblue",
  },
});

export default EditTasks;
