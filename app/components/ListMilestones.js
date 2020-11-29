import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// contains list items
function ListMilestones(props) {
  const navigation = useNavigation();

  // change goal to element, since this will be reused
  return props.ms.map((milstn) => {
    return (
      <View style={styles.list}>
        <Text
          style={{ backgroundColor: "salmon", flexGrow: 30, height: 40 }}
          key={milstn.id}
          onPress={() => navigation.navigate("Tasks")}
        >
          {milstn.name}
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

export default ListMilestones;
