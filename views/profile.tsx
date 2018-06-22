import * as React from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "react-navigation";
import styles, { bg, elBg } from "../styles";

class ProfileScreen extends React.Component<any, any> {
  private static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: bg,
      borderBottomColor: elBg,
    },
    headerTitleStyle: {
      color: "white",
    },
  };

  public state = {};
  public render() {
    return <SafeAreaView style={styles.safeAreaView} />;
  }
}

export default createStackNavigator(
  {
    ProfileScreen,
  },
  {},
);
