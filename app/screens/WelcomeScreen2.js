import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  },
  {
    id: 1,
    name: "refine portfolio",
  },
];

// contains list items
function List() {
  const [goals] = useState(goalsObj); // ALL the goals put in here
  const navigation = useNavigation();

  return goalsObj.map((goal) => {
    return (
      <View style={styles.list}>
        <Text style={{ backgroundColor: "salmon", flexGrow: 30 }} key={goal.id}>
          {goal.name}
        </Text>
        <Button
          title="edit"
          style={{ backgroundColor: "salmon", flexGrow: 1 }}
          onPress={() => navigation.navigate("Profile")}
        ></Button>
      </View>
    );
  });
}

// idk try this https://stackoverflow.com/questions/44678552/react-native-navigation-issue-undefined-is-not-an-object-this-props-navigati
//contains list items    stateful
// class List extends React.Component {
//   render() {
//     return (
//       <View style={styles.list}>
//         <Text style={{ backgroundColor: "salmon", flexGrow: 30 }} key={3}>
//           {"hello world"}
//         </Text>
//         <Button
//           title="edit"
//           style={{ backgroundColor: "salmon", flexGrow: 1 }}
//           onPress={() => this.props.navEdit}
//         ></Button>
//       </View>
//     );
//   }
// }

//
//  EACH OF THE BELOW WILL BE A SEPARATE SCREE
//   screen navigation (app.js): https://reactnavigation.org/docs/hello-react-navigation
//   state without component objects: https://reactnative.dev/docs/state
//

// each goal, first layer
const Goal = (props) => {};

// each milestone, second layer
const Milestone = (props) => {};

// each task, third layer
const Task = (props) => {};

// rsf
function WelcomeScreen({ navigation }) {
  function editGoal() {
    //console.log(localData);
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/blueBackground.png")}
    >
      <List
        navEdit={(paramTest) => {
          console.log("parameter passed is: " + paramTest);
          navigation.navigate("Profile");
        }}
      />
    </ImageBackground>
  );
}

// {goalsObj.map((goal) => (
//   <View style={styles.list}>
//     <Text
//       style={{ backgroundColor: "salmon", flexGrow: 30 }}
//       key={goal.id}
//     >
//       {goal.name}
//     </Text>
//     <Button
//       title="edit"
//       style={{ backgroundColor: "salmon", flexGrow: 1 }}
//       onPress={() => navigation.navigate("Profile")}
//     ></Button>
//   </View>
// ))}

// rnss shortcut
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  list: {
    paddingTop: 30,
    flexDirection: "row",
  },
});

export default WelcomeScreen;
