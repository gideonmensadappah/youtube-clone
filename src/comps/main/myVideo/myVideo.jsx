import React ,{ Component, useEffect}  from 'react';
import {VideoMetaData } from '../VideoMetaData/VideoMetaData';
import {getAllVideos} from '../../../data/UserFunctions';
import MoveisMenue from '../MoveisMenue/moveisMenue'
import {Video} from '../video/video';
import axios from 'axios';



export default class myVideos extends Component{
    constructor(){
        super()
        this.state = {};
        
    }

    componentDidMount(){
    const userId = this.props.match.params.id;
    console.log(userId)
       getAllVideos(userId).then(res => {
        console.log(res)
       
      
            this.setState([
                res
            ]) 
           
        
       }).catch(err => {
           console.log(err)
       })

    }   
    

 
   


 
    render(){
   

    return(


        <React.Fragment>
        <div className="row">
            <div className="col text-center">
            my video page!! start... 
            
           
            </div>
        </div>
     <div className="row">
         <div className='watch-grid'>
         <Video className='video' id='4aW1iw_fQ10'/>
       <VideoMetaData className='metadata mt-3 ml-0' viewCount={20000}/>
       </div>
   </div>
   <aside>
   <div className="row">
    <div className="col-4 text-center ml-auto">
    {this.state ?
        <div>
         {this.state[0].video.length }<MoveisMenue/>
         </div> : null
        }

    </div>
   </div>
   </aside>
</React.Fragment>
   
        
   
    )
}
  
}