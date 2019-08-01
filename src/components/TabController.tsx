import React from 'react';
import {MaterialIcons} from "react-native-vector-icons";
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {bg, elBg} from "../globalStyles";
import Home from "../views/Home";
import Chat from "../views/Chat";

const TabController = createMaterialBottomTabNavigator(
    {
        Home,
        Chat
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}: any) => {
                const {routeName} = navigation.state;
                let iconName: string = ``;
                switch (routeName) {
                    case "Home":
                        iconName = `home`;
                        break;

                    case "Chat":
                        iconName = `chat`;
                        break;

                    default:
                        break;
                }
                return <MaterialIcons name={iconName} size={25} color={tintColor}/>;
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

export default createAppContainer(TabController);