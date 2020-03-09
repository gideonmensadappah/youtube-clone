import React, { Component } from 'react';
import comments from './comment.css'
import data  from '../../../data/data.json';

class Comments extends Component {
    state = { }  
    render() { 
    
        return ( 
          <React.Fragment>

                {data.map((_data, index)=>{
               
              
                  return <div className="col-6 mb-3 ml-auto comment-box" key={_data.id}>
                  <div className="card text-center">
                  <h5 className="card-header">
                 { _data.name}
                  </h5>
                  <div className="card-body">
                <h5 className="card-title">{_data.videos[0].comments[0].text}</h5>
                  <p className="card-text"></p>
                   </div>
                   <div className="card-footer text-muted">
                   {_data.videos[0].comments[0].creationDate}
               </div>
               </div>
               </div>
    })}
      
            
     
          </React.Fragment>
         );
    }
}
 
export default Comments;