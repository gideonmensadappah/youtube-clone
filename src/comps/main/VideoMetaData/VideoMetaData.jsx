import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import "./VideoMetaData.scss";

export function VideoMetaData(props) {
  const viewCount = Number(props.viewCount).toLocaleString() || "";
  return (
    <div className="video-metadata">
      {props.title ? (
        <React.Fragment>
          <span> Video Info:</span>
          <h3>Title: {props.title}</h3>
          <span>{viewCount} views</span>
        </React.Fragment>
      ) : (
        ""
      )}
      <div className="video-status">
        <div>{/*TODO*/}</div>
      </div>
      <Divider />
    </div>
  );
}
