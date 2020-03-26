import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { getDataforUserSearch } from "../../data/UserFunctions";
import searchPage from "./searchPage.css";

export const SearchPage = props => {
  const [songList, setSongList] = useState([]);
  const [newSongList, setNewsongList] = useState([]);
  const getVideos = () => {
    getDataforUserSearch()
      .then(res => setSongList(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getVideos();
  }, []);

  const filterFunc = () => {
    let { data } = props.location;
    if (data != undefined) {
      let userInput = data.toLowerCase();
      return songList.filter(song => song.title.search(userInput) !== -1);
    }
  };

  return (
    <React.Fragment>
      {filterFunc() ? (
        filterFunc().map(song => (
          <div id="con" key={song.id}>
            <div className="rw">
              <div className="col-8">
                <div
                  className="card mb-3"
                  style={{ marginTop: "1em", maxwidth: "540px" }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={`https://img.youtube.com/vi/${song.source}/hqdefault.jpg`}
                        className="card-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{song.title}</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="containerNotFound">
          <div className="row">
            <div className="col" id="resultsNotFound">
              <h1> Oops We Found No Results For {props.location.data}</h1>
              <span>Try go to home page or create a new search</span>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
