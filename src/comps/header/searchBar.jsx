import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import head from "../header/head.css";
import axios from "axios";
const queryString = require("query-string");

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      result: {},
      loading: false,
      message: "",
    };
    this.styles = {
      searchInput: { width: "350px" },
    };

    this.cancel = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInputEvent = this.handleChangeInputEvent.bind(this);
  }

  handleChangeInputEvent = (e) => {
    const searchQuery = e.target.value;
    this.setState({ searchQuery, loading: true, message: "" });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log("start");

    let query = this.state.searchQuery;
    const readyURL = query.replace(/ /g, "-");
    this.props.history.push(`/search/query=${readyURL}`);
  }

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
            type="text"
            value={this.state.search}
            onChange={this.handleChangeInputEvent}
            placeholder="Search..."
            aria-label="Search"
            style={this.styles.searchInput}
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
