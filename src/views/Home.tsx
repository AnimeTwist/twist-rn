// TODO: Clean up the UI.
import React from "react";
import {FlatList, ScrollView, Text, View} from "react-native";
import {Avatar, ListItem, SearchBar} from "react-native-elements";
import {iOSUIKit} from "react-native-typography";
import {createStackNavigator, SafeAreaView} from "react-navigation";

import styles, {accent, elBg} from "../globalStyles";

import Anime from "./anime";

import API from "../api/twist";

interface IAnimeItem {
    title: string;
    kitsu: number;
}

class Home extends React.Component<any, any> {
    private static navigationOptions = {
        header: null
    };
    public state = {
        animeList: [],
        search: ""
    };

    constructor(props: any) {
        super(props);
        this.fetchList();
    }

    public fetchList = async () => {
        try {
            const animeList = await new API().getAll();
            this.setState({animeList});
        } catch (error) {
            if (__DEV__) {
                // tslint:disable-next-line:no-console
                console.error(error);
            }
        }
    };

    public avatarIconPress = () => {
        return this.props.navigation.navigate("Profile");
    };

    public openAnime = (anime: IAnimeItem) => {
        return this.props.navigation.navigate("Episodes", {
            title: anime.title,
            id: anime.kitsu
        });
    };

    public handleSearch = async () => {
    };

    public handleSearchClear = () => this.setState({search: ""});

    // TODO: Replace iOS mockery with complete own styling that suits both platforms.
    // TODO: Adjust data to fit new API.
    public render() {
        const {animeList, search} = this.state;
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewAppleBar}>
                        <View style={styles.viewAppleBarContent}>
                            <SearchBar
                                containerStyle={{
                                    backgroundColor: "transparent",
                                    borderColor: "transparent",
                                    borderTopColor: "transparent",
                                    borderTopWidth: 0,
                                    borderBottomWidth: 0,
                                    flex: 1
                                }}
                                inputStyle={{
                                    backgroundColor: accent
                                }}
                                style={{color: "white"}}
                                placeholderTextColor={"rgba(255,255,255,.5)"}
                                onChangeText={this.handleSearch}
                                onClear={this.handleSearchClear}
                                placeholder="Search anime"
                                value={search}
                            />
                            <View style={styles.viewAppleBarRow}>
                                <View>
                                    <View style={{opacity: 0.5}}>
                                        <Text style={iOSUIKit.footnoteEmphasizedWhite}>
                                            ANIME TWIST
                                        </Text>
                                    </View>
                                    <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Home</Text>
                                </View>
                                <View style={{flex: 1}}/>
                                <Avatar
                                    size="medium"
                                    rounded
                                    source={{uri: "https://u.lewd.se/kmKTwu_G2JtWd9.png"}}
                                    onPress={this.avatarIconPress}
                                    activeOpacity={0.9}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewMotd}>
                        <Text style={iOSUIKit.bodyEmphasizedWhite}>15th of July 2018</Text>
                        <Text style={iOSUIKit.bodyWhite}>
                            {`Do you like the quality of our site?
Then share it with your friends and family and let them enjoy it too.`}
                        </Text>
                    </View>
                    <View style={styles.viewAnimeList}>
                        <View style={{opacity: 0.5, paddingLeft: 16}}>
                            <Text style={iOSUIKit.footnoteEmphasizedWhite}>ANIME LIST</Text>
                        </View>
                        {animeList && (
                            <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={animeList.sort((a: any, b: any) =>
                                    a.title.localeCompare(b.title)
                                )}
                                renderItem={({item}: any) => (
                                    <ListItem
                                        containerStyle={{borderBottomColor: elBg}}
                                        titleStyle={{color: "white"}}
                                        title={item.title}
                                        subtitle={item.ongoing ? "Ongoing" : undefined}
                                        subtitleStyle={{color: accent}}
                                        onPress={this.openAnime.bind(this, item)}
                                        chevron={false}
                                    />
                                )}
                            />
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default createStackNavigator(
    {
        Home,
        Anime
    },
    {}
);
