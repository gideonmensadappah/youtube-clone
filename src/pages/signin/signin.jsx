import React, { Component } from 'react';
import {signin as css} from './signin.css';
import {Link} from 'react-router-dom';

import {signin} from '../../data/UserFunctions'

class Signin extends Component {
  constructor() {
    super()
      this.state = {
        email: '',
        password: ''
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    

    
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  } 

  onSubmit(e){
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    signin(user).then(res => {
      if(res) {
        this.props.history.push('/user/profile')
      }
    })

  }

  

  
   
    render() { 
        return ( 
     
                        
              <div className="container text-center">
                    <div className="row">
                        <div className="col">
    <form className="form-signin" onSubmit={this.onSubmit}>

  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label htmlFor="email"  className="sr-only">Email address</label>
  <input type="email"  className="form-control" name="email" placeholder="Email address" onChange={this.onChange} value={this.state.email}  required autoFocus/>
  <label htmlFor="password"  className="sr-only">Password</label>
  <input type="password" id="password" name="password" onChange={this.onChange} className="form-control" placeholder="Password" value={this.state.password} required/>
  <div className="mb-3">
    <label>
        <Link to="/user/signup">  
        Create account
      </Link>
    </label>
  </div>
  <button className="btn btn-lg btn-primary btn-block"  type="submit">Sign in</button>
  <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
</form>
                        </div>
                    </div>
              </div>

      

         );
    }
}
 
export default Signin;
