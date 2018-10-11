import * as React from "react";
import {SafeAreaView, View} from "react-native";
import {createStackNavigator} from "react-navigation";
import styles, {bg, elBg} from "../styles";

class Chat extends React.Component<any, any> {
    private static navigationOptions = {
        title: "Chat",
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
        return <SafeAreaView style={styles.safeAreaView}>
            <View style={{flex: 1}}>

            </View>
            <View style={{width: "100%", height: 64, borderTopWidth: 0.5, borderTopColor: elBg}}>

            </View>
        </SafeAreaView>;
    }
}

export default createStackNavigator(
    {
        Chat,
    },
    {},
);
