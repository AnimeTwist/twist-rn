import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { iOSUIKit } from "react-native-typography";
import { SafeAreaView } from "react-navigation";
import API from "../api";
import styles, { elBg } from "../styles";
import VideoPlayer from "./videoplayer";

export default class Episodes extends React.Component<any, any> {
  private static navigationOptions = {
    headerTitle: null,
    headerStyle: {
      borderBottomColor: "transparent"
    },
    headerLeft: () => null,
    headerTransparent: true
  };

  public state = {
    episodeList: [],
    currentEpisode: null
  };

  public async componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 0);
    try {
      const episodeList = await API.loadEpisodeList(id);
      this.setState({ episodeList }, () => console.log(this.state));
    } catch (error) {
      if (__DEV__) {
        // tslint:disable-next-line:no-console
        console.error(error);
      }
    }
  }

  public changeEpisode = async (episode: any) => {
    try {
      const episode = await fetch(``);
      return this.setState({ currentEpisode: episode });
    } catch (error) {
      return new Error(error);
    }
  };

  public render() {
    const { episodeList, currentEpisode } = this.state;
    const { navigation } = this.props;
    const title = navigation.getParam("title", "Episodes");
    return (
      <SafeAreaView style={styles.safeAreaViewBlack}>
        <VideoPlayer
          height={216}
          width="100%"
          source="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        />
        <ScrollView style={styles.scrollViewNotBlack}>
          <View style={styles.viewAppleBar}>
            <View style={styles.viewAppleBarContent}>
              <View style={styles.viewAppleBarRow}>
                <View>
                  <View style={{ opacity: 0.5 }}>
                    <Text style={iOSUIKit.footnoteEmphasizedWhite}>ANIME</Text>
                  </View>
                  <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
                    {title}
                  </Text>
                </View>
                <View style={{ flex: 1 }} />
              </View>
            </View>
          </View>
          <View style={{ opacity: 0.5, paddingLeft: 16, paddingBottom: 16 }}>
            <Text style={iOSUIKit.footnoteEmphasizedWhite}>EPISODES</Text>
          </View>
          <View style={styles.viewEpisodeList}>
            {episodeList &&
              episodeList
                .sort((a: any, b: any) => b.episode - a.episode)
                .map((item: any, index) => (
                  <Button
                    style={{ width: 64, margin: 2 }}
                    containerStyle={{
                      borderRadius: 8,
                      backgroundColor: elBg
                    }}
                    titleStyle={{ fontWeight: "500" }}
                    key={index}
                    title={item.episode.toString()}
                    onPress={this.changeEpisode.bind(this, item)}
                  />
                ))
                .reverse()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
