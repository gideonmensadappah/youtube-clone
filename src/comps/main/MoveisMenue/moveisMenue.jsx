// import React, { useState, useEffect } from 'react';
// import SideVideoMenue from '../MoveisMenue/sideVideoMenue';
// import {getAllVideos} from '../../../data/UserFunctions';

// function  MoveisMenue(props){
//     const {

//         source='',
//         title='',
//         onClick 
//     } = props
    
//  const [videoList, setVideoList] = useState([])



//     //Set video list function
//     function getVideos(){
//         getAllVideos(2)
//         .then(res => {
            
//             setVideoList(res.video)
//         })
//         .catch(err => console.log(err))
//        }
       

// function onVideoClicked(video){
//     console.log('video was clicked')
//     console.log(video)
// } 
//        //useEffect
//         useEffect(()=> {
//               getVideos()  
//         },[])
//         function handleClickedVideo(video){
//             console.log(video)
//         }

//         //renders the menu
//     function renderVideoList(){
                
//            return videoList.map(v =>
//             <iframe width="200" 
//             height="200" 
//             key={v.id}
//             src={`https://www.youtube.com/embed/${v.source}`}
//             frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//             allowFullScreen
//             onClick={handleClickedVideo(v.source)}
//             ></iframe>
//              )}
//         return ( 
            
//             <div className='watch-grid' onClick={onClick}>
    
//            {renderVideoList()}
              

//           </div>
         
//          );
    
// }
 
// export default MoveisMenue;