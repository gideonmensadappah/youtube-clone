import React, { Component } from 'react';
import {editProfile} from '../../data/UserFunctions';

class EditProfile extends Component {
    constructor(){
        super()
        this.state = { 
          id:'',
          first_name:'',
          last_name:'',
          email:'',
          phone:''
         }
        
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
         this.onCancel = this.onCancel.bind(this); 
    }

    onChange(e){
      this.setState({ [e.target.name]: e.target.value })
    }

   
    onCancel(e){
    window.location.href ='/user/profile';
    }


    onSubmit(e){
      e.preventDefault()
 
      const user = {
          first_name:this.state.first_name,
          last_name:this.state.last_name,
          email:this.state.email,
          phone:this.state.phone,
          id:this.state.id
      }

      // edit profile function
      editProfile(user).then(res => {
      
          if(res) {

              this.props.history.push('/profile')
          }else {
              console.log('could not update '+ this.user.id)
          }
      })


  }


    render() { 
        return (  
            <React.Fragment>
               <div className="container text-center">
                    <div className="row">
                        <div className="col">
    <form className="form-signin" onSubmit={this.onSubmit}>

  <h1 className="h3 mb-3 font-weight-normal">Update Your Profile</h1>
  <label htmlFor="first_name"  className="sr-only">First Name</label>
<input type="text" name="first_name" id="first_name" onChange={this.onChange} value={this.state.first_name} className="form-control mt-3" placeholder="First Name" value={this.state.first_name} required autoFocus/>
<label htmlFor="last_name"  className="sr-only">Last Name</label>
<input type="text" id="last_name" name="last_name" onChange={this.onChange} value={this.state.last_name} className="form-control mt-3" placeholder="Last Name" required autoFocus/>
<label htmlFor="email"  className="sr-only">Email address</label>
<input type="email" id="email" name="email" onChange={this.onChange} value={this.state.email} className="form-control mt-3" placeholder="Email address" required autoFocus/>
<label htmlFor="phone"  className="sr-only">Phone</label>
<input type="tel" id="phone" name="phone" onChange={this.onChange} value={this.state.phone} className="form-control mt-3" placeholder="Phone" required/>
<button className="btn btn-danger my-3 mr-2" onClick={this.onCancel} type="button">Cancel</button>
  <button className="btn btn-primary my-3" onSubmit={this.onSubmit}  type="submit">Update</button>
  
</form>
                        </div>
                    </div>
              </div>

      
            </React.Fragment>
        );
    }
}
 
export default EditProfile;