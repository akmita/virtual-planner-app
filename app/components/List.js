// change this to listgoals

import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// contains list items
function List(props) {
  const navigation = useNavigation();

  // TODO put map inside container
  return props.goals.map((goal) => {
    return (
      <View style={styles.list} key={goal.id}>
        <Text
          style={{ backgroundColor: "salmon", flexGrow: 30, height: 40 }}
          onPress={() => {
            navigation.navigate("Milestones", {
              goal: goal,
            });
          }}
        >
          {goal.name}
        </Text>
      </View>
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
