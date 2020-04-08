import React, { Component } from "react";
import { allVideos } from "../../../data/UserFunctions";
const style = {
  videoThumbnail: {
    width: "200px",
    marginTop: "10px",
    cursor: "pointer",
  },
};
export default class VideoThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
    };
  }
  componentDidMount() {
    this.fetchAllvideos();
  }
  fetchAllvideos = () => {
    allVideos().then((videos) => {
      const results = videos.data.videos;

      this.setState({ videoList: results });
    });
  };

  videoToBeActive = (video) => {
    this.props.setActiveVideo(video);
  };

  render() {
    const { videoList } = this.state;

    return (
      <>
        {videoList.map((video) => (
          <img
            alt=""
            key={video.id}
            src={`https://img.youtube.com/vi/${video.source}/hqdefault.jpg`}
            style={style.videoThumbnail}
            onClick={this.videoToBeActive.bind(null, video)}
          />
        ))}
      </>
    );
  }
}
