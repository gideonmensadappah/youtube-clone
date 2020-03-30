import React, { Component } from "react";
import head from "../header/head.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { UserSideBar } from "../../pages/profile/UserSideBar/UserSideBar";
import SearchBar from "../header/searchBar";
class Header extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  }

  state = {};

  render() {
    const loginRegLink = (
      <React.Fragment>
        <ul className="navbar-nav mr-auto">
          <Link to="/">
            <li className="navbar-item active">YourChannel</li>
          </Link>
          <Link to="/about">
            <li className="nav-item">About</li>
          </Link>
        </ul>

        <ul className="navbar-nav ml-auto">
          <Link to="/users/signin">
            <li className="nav-item active">Login</li>
          </Link>
        </ul>
      </React.Fragment>
    );

    const user = (
      <React.Fragment>
        <div className="container mt-2">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item ">YourChannel</li>
            </Link>
          </ul>

          <ul className="navbar-nav ">
            <Link to="/user/profile">
              <li className="nav-item">
                {/* <i class="fa fa-user fa-5x" aria-hidden="true"></i> */}
                My Profile
              </li>
            </Link>
          </ul>
          <SearchBar />
          <ul className="navbar-nav ">
            {/* 
          TypeError: Cannot read property 'push' of undefined
          */}

            <li className="nav-item">
              <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                {" "}
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
    return (
      <nav className="navbar fixed-top bg-dark navbar-expand-lg navbar-light bg-light">
        {localStorage.usertoken ? user : loginRegLink}
      </nav>
    );
  }
}

export default withRouter(Header);
