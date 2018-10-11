import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import { StatusBar, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { bg, elBg } from "./styles";
import Chat from "./views/chat";
import Home from "./views/home";
import Profile from "./views/profile";
import Settings from "./views/settings";

const App = createBottomTabNavigator(
  {
    Home,
    Chat,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }: any) => {
        const { routeName } = navigation.state;
        let iconName: string = ``;
        switch (routeName) {
          case "Home":
            iconName = `ios-home${focused ? "" : "-outline"}`;
            break;

          case "Chat":
            iconName = `ios-chatbubbles${focused ? "" : "-outline"}`;
            break;

          case "Profile":
            iconName = `ios-person${focused ? "" : "-outline"}`;
            break;

          case "Settings":
            iconName = `ios-settings${focused ? "" : "-outline"}`;
            break;

          default:
            break;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      activeBackgroundColor: elBg,
      tabStyle: {
        backgroundColor: bg,
        borderWidth: 0
      },
      style: {
        backgroundColor: bg
      }
    }
  }
);

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar animated barStyle="light-content" />
    <App />
  </View>
);
