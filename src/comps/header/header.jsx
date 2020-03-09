import React, { Component } from 'react';
import head from '../header/head.css';
import {Link, withRouter} from 'react-router-dom';
import {UserSideBar} from '../../pages/profile/UserSideBar/UserSideBar';

class Header extends Component {

      logOut(e){
            e.preventDefault()
            localStorage.removeItem('usertoken');
            this.props.history.push('/')
      }

      state = {  }
      render() { 
            const loginRegLink =  ( 
                  <React.Fragment>
                                
                            
                 <ul className="navbar-nav mr-auto">
                 <Link to="/">
                 <li className="navbar-item active">
                 YourChannel
                </li>
                </Link>
                <Link to="/about">
                <li className="nav-item">
                About
                </li>
                </Link>
                </ul>
                <ul className="navbar-nav ml-auto">
                <Link to="/users/signin">
                <li className="nav-item active">
                Login
                </li>
                </Link>
                </ul>
              

                  </React.Fragment>
             );
             
             const user =  ( 
                   
                   <React.Fragment>
                    
                  <div className="container mt-2">
                      

                 <ul className="navbar-nav">
                 <Link to="/">
                 <li className="nav-item ">
                 YourChannel
                </li>
                </Link>
                </ul>
                <ul className="navbar-nav ">
                <Link to="/user/profile">
                <li className="nav-item">
             My Profile
                </li>
                </Link>

               
                <li className="nav-item">
                  <a href="" onClick={this.logOut.bind(this)} className="nav-link"> LogOut</a>
                </li>
             
                </ul>
                     
                  </div>               
  

                  </React.Fragment>
             );
             return <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                        {localStorage.usertoken ? user  : loginRegLink}
                    </nav>
      }
}
 
export default withRouter(Header);

