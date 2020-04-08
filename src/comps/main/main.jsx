import React, { useState, useEffect } from "react";
import Comments from "./comments/comments";
import { VideoMetaData } from "../main/VideoMetaData/VideoMetaData";
import SearchBar from "../header/searchBar";
import { Video } from "../main/video/video";
import VideoThumbnail from "../main/MoviesMenue/VideoThumbnail";

import main from "../main/main.css";

const styles = {
  videoThumbnail: {
    width: "200px",
    marginTop: "10px",
    cursor: "pointer",
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

  return (
    <React.Fragment>
      <div className="activeVideo">
        <Video activeVideo={activeVideo} />
      </div>

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
          <Comments activeVideoId={activeVideo.id} />
        </div>

        {/* <NextVideo /> */}
        <div className="boxs">
          <VideoThumbnail setActiveVideo={setActiveVideo} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
