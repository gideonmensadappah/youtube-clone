import React, { useState, useEffect } from 'react';
import Comments from './comments/comments';
import {VideoMetaData} from '../main/VideoMetaData/VideoMetaData';
import {allVideos} from '../../data/UserFunctions';
import {NextVideo} from '../main/nextVideo/nextVideo';

const Main = () => {
    const [activeVideo, setActiveVideo] = useState({})
    const [videoList, setVideoList] = useState([])

      //Get all videos and set the state
      function getAllVideos(){
      allVideos()
      .then(videos => setVideoList(videos.data.videos))
      .catch(err => console.log(err))
      }

        // Youtube Image Generator
        const img = (videoSource,videoTile,videoId) => {
       
          return(
              <img src={`https://img.youtube.com/vi/${videoSource}/hqdefault.jpg`} key={videoId} style={{width:'270px',border:'box',marginRight:'0', marginTop:'5em',cursor:'pointer'}} onClick={()=>handleClickedVideo(videoSource, videoTile, videoId)} />
                  )
          }
          
          //Handle Clicked Video Function
       function handleClickedVideo(source, title, id){
            setActiveVideo({
              key:id,
              source:source,
              title:title
            })
          }

      // Use Effect
      useEffect(()=> {
        getAllVideos()
      },[])

      // active video functon
      function activeVid(){
            
        const embedUrl = `https://www.youtube.com/embed/${activeVideo.source}?autoplay=1`;
          return ( 
              <React.Fragment>
                          <div className="box ml-auto">
                 <iframe width="560" 
                 key={activeVideo.key}
                 height="315" 
                 src={embedUrl}
                 frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
                 ></iframe>
                        </div>
                        <VideoMetaData title={activeVideo.title} className='metadata mt-3 ml-0' viewCount={20000}/>
              </React.Fragment>
          
        );
    }

        return ( 
            <React.Fragment>
          {activeVid()}
            <div className='col-md-8 ml-auto'>
              <div className='video-info-box ml-auto' style={{width: '80%', height: '100px', marginRight:'15px', background:'black',color:'white'}}>Video Info box</div>
            <div className='comments ml-auto' style={{width: '80%', height: '100px', marginRight:'15px', background: 'black',color:'white',marginTop:'5px'}}>comments</div>
            </div>
            <NextVideo/>
     
     
              <div className="col-4 mt-0">
            {
              videoList.map(video => img(video.source, video.title, video.id) )
            }
              </div>
   
         
            </React.Fragment>
          
         );
    }

 
export default Main;