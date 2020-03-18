import React, { useEffect, useState } from "react";
import { VideoMetaData } from "../VideoMetaData/VideoMetaData";
import { getAllVideos } from "../../../data/UserFunctions";
import { Video } from "../video/video";

export const UserVideo = props => {
  //State
  const [activeVideo, setActiveVideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const { id } = props.match.params;

  //Set video list function
  function getVideos() {
    //GET THE USER ID

    getAllVideos(id)
      .then(res => {
        setVideoList(res.video);
      })
      .catch(err => console.log(err));
  }

  // Youtube Image Generator
  const img = (image, title, id) => {
    return (
      <img
        src={`https://img.youtube.com/vi/${image}/hqdefault.jpg`}
        key={id}
        style={{
          width: "200px",
          border: "box",
          marginTop: "5em",
          cursor: "pointer"
        }}
        onClick={() => handleClickedVideo(image, title, id)}
      />
    );
  };

  //useEffect
  useEffect(() => {
    getVideos();
  }, []);

  // Handle the image that has been clicked and set it to active video
  function handleClickedVideo(vid, videoTitle, id) {
    console.log(`id to set active ${vid}`);
    setActiveVideo({
      id: vid,
      key: id,
      title: videoTitle
    });
  }
  // Active Video
  function activeVid() {
    const embedUrl = `https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`;

    return (
      <React.Fragment>
        <div className="box">
          <iframe
            width="560"
            key={activeVideo.key}
            height="315"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <VideoMetaData
          title={activeVideo.title}
          className="metadata mt-3 ml-0"
          viewCount={20000}
        />
      </React.Fragment>
    );
  }

  //renders the menu
  function renderVideoList() {
    if (videoList.length === 0) {
      return (
        <div>
          <span>
            You have No videos for now...
            <br /> please go add videos{" "}
          </span>
        </div>
      );
    } else {
      return videoList.map(v => img(v.source, v.title, v.id));
    }
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="watch-grid">
          {/*active video*/}
          {activeVid()}
        </div>
      </div>
      <aside>
        <div className="row">
          <div className="col-4 text-center ml-auto">
            <div>
              {/* <MoveisMenue/> */}
              {renderVideoList()}
            </div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};
