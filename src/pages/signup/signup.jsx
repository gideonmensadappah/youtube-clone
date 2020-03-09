import React, { Component } from 'react';
import { signup } from '../../data/UserFunctions';

class SignUp extends Component {

    constructor(){
        super()
        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            phone:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone
        }
        signup(newUser).then(res =>{
            if(newUser){
                this.props.history.push('/users/signin')
            }
        })
    }

    render() { 
        return (   <React.Fragment>
            <div className="container ">
                  <div className="row">
                      <div className="col">
                  
  <form className="form-signin" method="POST" onSubmit={this.onSubmit} noValidate>
<h1 className="h3 mb-3 mt-5  display-3">sign up</h1>
<label htmlFor="first_name"  className="sr-only">First Name</label>
<input type="text" name="first_name" id="first_name" onChange={this.onChange} value={this.state.first_name} className="form-control " placeholder="First Name" required autoFocus/>
<label htmlFor="last_name"  className="sr-only">Last Name</label>
<input type="text" id="last_name" name="last_name" onChange={this.onChange} value={this.state.last_name} className="form-control mt-3" placeholder="Last Name" required autoFocus/>
<label htmlFor="email"  className="sr-only">Email address</label>
<input type="email" id="email" name="email" onChange={this.onChange} value={this.state.email} className="form-control mt-3" placeholder="Email address" required autoFocus/>
<label htmlFor="password"  className="sr-only">Password</label>
<input type="password" id="password" name="password" onChange={this.onChange} value={this.state.password} className="form-control mt-3" placeholder="Password" required/>
<label htmlFor="phone"  className="sr-only">Phone</label>
<input type="tel" id="phone" name="phone" onChange={this.onChange} value={this.state.phone} className="form-control" placeholder="Phone" required/>
<button className="btn btn-lg btn-primary mt-3 btn-block" type="submit">Create</button>
<p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
</form>

                      </div>
                  </div>
            </div>
         </React.Fragment> );
    }
}
 
export default SignUp;