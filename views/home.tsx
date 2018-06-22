import * as React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Avatar, ListItem, SearchBar } from "react-native-elements";
import { iOSUIKit } from "react-native-typography";
import { createStackNavigator, SafeAreaView } from "react-navigation";

import styles, { accent, bg, elBg } from "../styles";

import Episodes from "./episodes";

import API from "../api";

interface IAnimeItem {
  title: string;
  kitsu: number;
}
class Home extends React.Component<any, any> {
  private static navigationOptions = {
    headerStyle: {
      backgroundColor: bg,
      borderBottomColor: elBg,
    },
    headerTitle: (
      <SearchBar
        containerStyle={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderTopColor: "transparent",
          borderTopWidth: 0,
          borderBottomWidth: 0,
          flex: 1,
        }}
        inputStyle={{
          backgroundColor: accent,
        }}
        style={{ color: "white" }}
        placeholderTextColor={"rgba(255,255,255,.5)"}
        noIcon
        onChangeText={this.handleSearch}
        onClear={this.handleSearchClear}
        placeholder="Search anime"
      />
    ),
  };

  public state = {
    animeList: [],
  };

  public async componentDidMount() {
    try {
      const animeList = await API.load();
      this.setState({ animeList });
    } catch (error) {
      if (__DEV__) {
        // tslint:disable-next-line:no-console
        console.error(error);
      }
    }
  }

  public avatarIconPress = () => {
    return this.props.navigation.navigate("Profile");
  }

  public openAnime = (anime: IAnimeItem) => {
    return this.props.navigation.navigate("Episodes", {
      title: anime.title,
      id: anime.kitsu,
    });
  }
  public render() {
    const { animeList } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewAppleBar}>
            <View style={styles.viewAppleBarContent}>
              <View style={styles.viewAppleBarRow}>
                <View>
                  <View style={{ opacity: 0.5 }}>
                    <Text style={iOSUIKit.footnoteEmphasizedWhite}>
                      ANIME TWIST
                    </Text>
                  </View>
                  <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Home</Text>
                </View>
                <View style={{ flex: 1 }} />
                <Avatar
                  medium
                  rounded
                  source={{ uri: "https://u.lewd.se/kmKTwu_G2JtWd9.png" }}
                  onPress={this.avatarIconPress}
                  activeOpacity={0.9}
                />
              </View>
            </View>
          </View>
          <View style={styles.viewMotd}>
            <Text style={iOSUIKit.bodyEmphasizedWhite}>SOS! Please help!</Text>
            <Text style={iOSUIKit.bodyWhite}>
              {`😱 PayPal just locked our account and no longer lets us accept donations!
🆘 So we made a new Patreon account and need all your help to pay for the site
🔗 Please support us through our new Patreon at: https://goo.gl/j1uoV3`}
            </Text>
          </View>
          <View style={styles.viewAnimeList}>
            <View style={{ opacity: 0.5, paddingLeft: 16 }}>
              <Text style={iOSUIKit.footnoteEmphasizedWhite}>ANIME LIST</Text>
            </View>
            {animeList && (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={animeList}
                renderItem={({ item }) => (
                  <ListItem
                    containerStyle={{ borderBottomColor: elBg }}
                    titleStyle={{ color: "white" }}
                    title={item.title}
                    onPress={this.openAnime.bind(this, item)}
                    hideChevron={true}
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
    Episodes,
  },
  {},
);
