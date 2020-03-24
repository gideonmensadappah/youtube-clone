import React, { Component } from "react";
import queryString from "query-string";
import { getDataforUserSearch } from "../../data/UserFunctions";
import searchPage from "./searchPage.css";
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: [],
      loading: true,
      message: ""
    };
  }
  componentDidMount() {
    //query string
    const url = this.props.location.search;
    console.log(url);
    const userRequest = url.split("=");

    this.setState({
      query: userRequest[1]
    });

    getDataforUserSearch(url)
      .then(result => {
        console.log(result);
        this.setState({
          resulfafasfffat: result.data,
          res: result.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Result for: {this.state.query}</h1>
        {!this.state.result.length == 0 ? (
          this.state.result.map(data => (
            <div key={data.id} className="container display-serch">
              <div className="my-3 row">
                <div className="col-5">
                  <h3 style={{ paddingLeft: "200px" }}>
                    {"title: " + data.title}
                  </h3>
                  <img
                    className="card"
                    src={`https://img.youtube.com/vi/${data.source}/hqdefault.jpg`}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 style={{ paddingLeft: "50px" }}>Oups No Results ....</h3>
        )}
      </React.Fragment>
    );
  }
}
