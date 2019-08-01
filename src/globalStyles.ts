import {StyleSheet} from "react-native";

export const accent: string = "#e53232";
export const bg: string = "#1c1f22";
export const elBg: string = "rgba(255, 255, 255, .05)";

// TODO: Make the styling suit both platforms.

export default StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: bg
    },
    scrollView: {
        flex: 1
    },
    safeAreaViewBlack: {
        flex: 1,
        backgroundColor: "black"
    },
    scrollViewNotBlack: {
        flex: 1,
        backgroundColor: bg
    },
    viewAppleBar: {
        padding: 16
    },
    viewAppleBarContent: {
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: elBg
    },
    viewAppleBarRow: {
        flexDirection: "row"
    },
    viewMotd: {
        margin: 16,
        backgroundColor: elBg,
        padding: 16,
        borderRadius: 16,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.1
    },
    viewAnimeList: {
        paddingTop: 16
    },
    viewEpisodeList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    }
});