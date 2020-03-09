import React, { Component } from 'react';
import {addVid} from '../../../data/UserFunctions';
import jwt_decode from 'jwt-decode'


class AddVideo extends Component {
    constructor(){
        super()
       
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.linkDestructor = this.linkDestructor.bind(this)
       
       
    }
    
    //onSubmit Function
    onSubmit(e){
        e.preventDefault()
        console.log('start process')
        const token = localStorage.getItem('usertoken');
        if(token == null) return console.log('error in the token') 
        const decoded = jwt_decode(token)
        const txt = document.getElementById('video').value;
        const title = document.getElementById('title').value;
        const vid =  this.linkDestructor(txt)

        // video title and link are in this Obj
        const video =  {
            title: title,
            video: vid,
            uploader_id:decoded.id
            
        }
        console.log(video)
       addVid(video)


    }

    // Destruct the id from the link
   linkDestructor(link){
        let text = '';
    if(link == ''){
        console.log('please you have to bring a link')
    

    }else{
           //seprate and get the ID of the link
     //then return the id to console
     // validate the arr
    let arr =  link.split('=');
    const _arr = arr[1]
    let endPos =   arr[1].search('&');
    text = _arr.slice(0,endPos);
   
    return text
    }
  
  }

    //onChange function
    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    state = {  }
    render() { 
        return (    /**  'ADD VIDEO PAGE...'
        TODO
     * 1. build the form
     * 2. build the DataBase 
     * 3. Make A function thet will separates
     * 4. Create the Routes (server side/ client side)
     * 5. Create the Model 
     * 6. Check if the DataBase makes an suscessful insert from the server side
     * 
     */

    <React.Fragment>
     <div className="container">
     <div className="row">
         
     <div className="col-6 mt-5 my-3">
     <div className="jumbotron jumbotron-fluid">

<h1 className="display-4 mt-3 text-center">Add Video Page</h1>

</div>
       <form onSubmit={this.onSubmit}>
       <div className="form-group">
        <label htmlFor="title"> Video name</label>
        <input type="text"  className="form-control" name="title" id="title"  placeholder="title input "/>    
         </div>
 
        <div className="form-group">
        <label htmlFor="video"> Add video</label>
     <input type="text"  className="form-control" name="video" id="video"  placeholder="link input "/>
       <button type="submit" className="btn btn-primary mt-2"> add</button>
        </div>
         </form>
       </div>
     </div>
     <div className="row">
         <div className="col-6 ml-auto">
                <video 
                src={this.video}
                >

                </video>
         </div>
     </div>
     </div>
        </React.Fragment> );
    }
}
 
export default AddVideo;

