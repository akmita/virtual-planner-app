import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListMilestones from "../components/ListMilestones";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

class GoalInfo extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TextInput style={styles.input}>{this.props.goal.name}</TextInput>
        </View>
        <View>
          <TextInput style={styles.input}>{this.props.goal.reason}</TextInput>
          <TouchableNativeFeedback
            style={styles.button}
            onPress={this.handlePress}
          >
            <Text>Update</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

function MilestonesScreen({ route, navigation }) {
  const { goal } = route.params; // goals

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/blueBackground.png")}
    >
      <GoalInfo goal={goal}></GoalInfo>
      <ListMilestones ms={goal.milestones} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    marginHorizontal: 5,
    marginTop: 4,
  },
  button: {
    margin: 5,
    height: 30,
    marginBottom: 15,
    backgroundColor: "lightblue",
  },
});

export default MilestonesScreen;
