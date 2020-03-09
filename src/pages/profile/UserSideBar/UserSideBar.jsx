import React from 'react';
import {Link} from 'react-router-dom';


export function UserSideBar(props) {
     const userId = props.id;
  
    return(
    
 
      <div className="sidebar-sticky mt-5">
      <ul className="nav flex-column">
        
      
        <li className="nav-item">
          <Link to={'/videos/all/videos'} className="nav-link">
         
          <i className="fa fa-youtube-square " aria-hidden="true"></i> All Videos
      
          </Link>
        </li>
   
        <li className="nav-item">
          <Link to={`/videos/myVideos/${userId}`} className="nav-link">
          
          <i className="fa fa-video-camera" aria-hidden="true"></i> My Videos
         
          </Link>
        </li>
        <li className="nav-item" >
          <Link to={'/add/video'} className="nav-link">
         
           <i className="fa fa-plus"></i> Add Videos
      
          </Link>
        </li>
      </ul>

    </div>

        
     
    )
}