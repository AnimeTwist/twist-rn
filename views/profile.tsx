import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import styles, { bg, elBg } from "../styles";
import { iOSUIKit } from "react-native-typography";

class ProfileScreen extends React.Component<any, any> {
  private static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: bg,
      borderBottomColor: elBg
    },
    headerTitleStyle: {
      color: "white"
    }
  };

  public state = {};

  public render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.viewMotd}>
          <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Profile</Text>
          <Text style={iOSUIKit.subheadWhite}>{`Coming soon`}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default createStackNavigator(
  {
    ProfileScreen
  },
  {}
);
