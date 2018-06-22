import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { iOSUIKit } from "react-native-typography";
import { SafeAreaView } from "react-navigation";
import API from "../api";
import styles, { bg, elBg } from "../styles";
import VideoPlayer from "./videoplayer";

export default class Episodes extends React.Component<any, any> {
  private static navigationOptions = {
    headerTitle: null,
    headerStyle: {
      borderBottomColor: "transparent",
    },
    headerTransparent: true,
  };

  public state = {
    episodeList: [],
  };

  public async componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 0);
    try {
      const episodeList = await API.loadEpisodeList(id);
      this.setState({ episodeList });
    } catch (error) {
      if (__DEV__) {
        // tslint:disable-next-line:no-console
        console.error(error);
      }
    }
  }
  public render() {
    const { episodeList } = this.state;
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
                .map((item, index) => (
                  <Button key={index} title={item.episode.toString()} />
                ))
                .reverse()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
