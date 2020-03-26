import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import head from "../header/head.css";
import axios from "axios";
const queryString = require("query-string");

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      userSearch: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    let dataToSend = this.state.userSearch.trim();
    if (dataToSend != "") {
      console.log("send user request!!");
      // console.log(this.state.userSearch);
      this.props.history.push({
        pathname: "/search/results",
        data: dataToSend
      });
    } else if (dataToSend === "") {
      alert("please you must write somthing");
    }
  };

  render() {
    return (
      <form
        className="con"
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <label htmlFor="search">
          <input
            className="form-control"
            id="search"
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            placeholder="Search..."
            aria-label="Search"
            style={{ width: "350px" }}
          />
        </label>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </form>
    );
  }
}
export default withRouter(SearchBar);
