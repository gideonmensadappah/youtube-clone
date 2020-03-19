import React, { Component } from "react";
import { allVideos } from "../../data/UserFunctions";
export default class SearchBar extends Component {
  render() {
    function handleChange() {
      allVideos().then(e => {
        const songs = e.data.videos;

        const search = document.getElementById("search").value;
        // get the list and filter trough it [list of videos]
        const res = songs.filter(el => {
          // string is the user input (param) user input
          return el.title.indexOf(search) !== -1;
        });

        console.log(res);
      });
    }
    return (
      <form className="form-inline" onClick={this.handleSubmit}>
        <input
          className="form-control mr-sm-2"
          id="search"
          type="search"
          placeholder="Search video"
          aria-label="Search"
          onChange={handleChange}
        />

        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}
