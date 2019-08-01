import {Video} from "expo-av";
import React from "react";

interface IVideoPlayer {
    height: number;
    width: number | string;
    source: string;
}

export default class VideoPlayer extends React.Component<IVideoPlayer, any> {
    public state = {};

    _handleVideoRef = (component: React.Component) => {
        const pbObj = component;
    };

    public render() {
        const {height, width, source} = this.props;
        return (
            <Video
                ref={this._handleVideoRef}
            />
        );
    }
}
