import React, { Component } from 'react';
import videoBox from '../video/videobox.scss';
import {VideoPreview} from '../../main/videoPreview/videoPreview';


 export function Video(props) {
    if (!props.id) {
        return null;
      }
      const BASE_EMBED_URL = "https://www.youtube.com/embed/";
      const embedUrl = `${BASE_EMBED_URL}${props.id}`;

        return ( 
            <React.Fragment>
                        <div className="box">
               <iframe width="560" 
               height="315" 
               src={embedUrl}
               frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen></iframe>
       
                      </div>
              
                   {/* <VideoPreview horizontal={true}/> */}
                   {/* <VideoPreview/> */}
            </React.Fragment>
        
            );
    }

 
