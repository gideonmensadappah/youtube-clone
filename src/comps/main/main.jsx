import React, { useState, useEffect } from "react";
import Comments from "./comments/comments";
import { VideoMetaData } from "../main/VideoMetaData/VideoMetaData";
import { NextVideo } from "../main/nextVideo/nextVideo";
import SearchBar from "../header/searchBar";
import { AddComments } from "./addComments/addComments";
import { allVideos } from "../../data/UserFunctions";
import main from "../main/main.css";

const styles = {
  videoThumbnail: {
    width: "200px",
    marginTop: "10px",
    cursor: "pointer",
  },
  activeVid: {
    height: "415px",
    width: "700px",
  },
  videoInfo: {
    width: "700px",
    height: "100px",
    marginLeft: "60px",
    color: "black",
  },
};
const Main = () => {
  const [activeVideo, setActiveVideo] = useState({
    id: 0,
    key: 0,
    source: "36LHsjX6vCo",
    title: "defult",
  });
  const [videoList, setVideoList] = useState([]);

  // Youtube Image Generator, Has to be potten in component
  const img = (videoSource, videoTile, videoId) => {
    return (
      <img
        src={`https://img.youtube.com/vi/${videoSource}/hqdefault.jpg`}
        key={videoId}
        style={styles.videoThumbnail}
        alt=""
        onClick={() => handleClickedVideo(videoSource, videoTile, videoId)}
      />
    );
  };

  //Handle Clicked Video Function
  function handleClickedVideo(source, title, id) {
    setActiveVideo({
      id: id,
      key: id,
      source: source,
      title: title,
    });
  }

  // Use Effect
  useEffect(() => {
    allVideos()
      .then((videos) => setVideoList(videos.data.videos))
      .catch((err) => console.log(err));
  }, []);

  // active video function
  function activeVid() {
    const embedUrl = `https://www.youtube.com/embed/${activeVideo.source}?autoplay=1`;
    return (
      <div className="box-border ">
        <iframe
          className="video"
          style={styles.activeVid}
          key={activeVideo.key}
          title={activeVideo.source}
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>{" "}
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="activeVideo">{activeVid()}</div>

      <div className="videoInfo" style={styles.videoInfo}>
        <VideoMetaData
          title={activeVideo.title}
          className="metadata mt-3 ml-0"
          viewCount={20000}
        />{" "}
      </div>

      <div className="container">
        <div className="boxs" id="comment">
          {" "}
          Add comment below
          <AddComments id={activeVideo.id} />
        </div>

        {/* <NextVideo /> */}
        <div className="boxs">
          {videoList.map((video) => img(video.source, video.title, video.id))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
