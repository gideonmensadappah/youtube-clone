import React from "react";
import { Link } from "react-router-dom";

export function UserSideBar(props) {
  const userid = props.id;

  return (
    <div className="sidebar-sticky mt-5">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            <i className="fa fa-youtube-square " aria-hidden="true"></i> All
            Videos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={`/videos/myVideos/${userid}`}
            userid={props.id}
            className="nav-link"
          >
            <i className="fa fa-video-camera" aria-hidden="true"></i> My Videos
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add/video"} className="nav-link">
            <i className="fa fa-plus"></i> Add Videos
          </Link>
        </li>
      </ul>
    </div>
  );
}
