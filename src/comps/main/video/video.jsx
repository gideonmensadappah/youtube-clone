import React, { Component } from "react";
import videoBox from "../video/videobox.scss";
const styles = {
  activeVideo: {
    height: "415px",
    width: "700px",
  },
  boxBorder: {
    marginTop: "5em",
  },
};
export const Video = (props) => {
  const video = props.activeVideo;
  const embedUrl = `https://www.youtube.com/embed/${video.source}?autoplay=1`;

  return (
    <>
      <div className="box-border" style={styles.boxBorder}>
        <iframe
          title={video.id}
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          alt=""
          style={styles.activeVideo}
        ></iframe>
      </div>
    </>
  );
};
