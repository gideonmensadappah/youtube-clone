import React, { Component } from 'react';
import {Video} from './video/video';
import {RelatedVideos} from './videoList/videoList';
import Comments from './comments/comments';
import Signin from '../../pages/signin/signin';
import {VideoMetaData} from '../main/VideoMetaData/VideoMetaData';

class Main extends Component {
    state = {  }
    
    render() { 
        function getVideo(vid){
            const _video = vid;
            
            return _video;
        }
        return ( 
            <React.Fragment>
            <div className='watch-grid'>
            <Video className='video' id='6JnGBs88sL0'/>
         {/* <VideoMetaData className='metadata ml-0' viewCount={20000}/>
              <div className='video-info-box ml-0' style={{width: '80%', height: '100px', background: '#BD10E0'}}>Video Info box</div>
            <div className='comments' style={{width: '80%', height: '100px', background: '#9013FE'}}>comments</div> */}
          </div>
            <RelatedVideos className='related-videos'/>
          
            </React.Fragment>
          
         );
    }
}
 
export default Main;