import Video from "react-native-video";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "react-navigation";
import styles from "../styles";

interface IVideoPlayer {
  height: number;
  width: number | string;
  source: string;
}

export default class VideoPlayer extends React.Component<IVideoPlayer, any> {
  public state = {};
  public render() {
    const { height, width, source } = this.props;
    return (
      <Video
        source={{
          uri: source
        }}
        style={{ height, width, backgroundColor: "black" }}
        resizeMode="contain"
      />
    );
  }
}
