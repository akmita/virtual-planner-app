// navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GoalScreen from "./app/screens/goalScreen";
import MilestonesScreen from "./app/screens/milestone";
import TasksScreen from "./app/screens/taskScreen";

const localData = require("./");
const Stack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Test Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={GoalScreen}
          options={{ title: "Welcome" }}
        ></Stack.Screen>
        <Stack.Screen name="Profile" component={DetailsScreen} />
        <Stack.Screen
          name="Milestones"
          component={MilestonesScreen}
          options={{ title: "Milestones" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{ title: "Tasks" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// {(props) => <WelcomeScreen {...props} extraData={"goalsData"} />}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
