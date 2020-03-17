import React, { Component } from "react";

export default class PageNotFound extends Component {
  componentDidMount() {
    document.getElementById("btn").addEventListener("click", () => {
      this.props.history.push("/");
    });
  }

  render() {
    const style = {
      color: "red",
      textAlign: "center",
      border: "10px solid black",
      marginTop: "75px"
    };
    return (
      <div style={style}>
        <h1>PageNotFound </h1>
        <span>Oops The Page You Are Looking For Is Not Found </span>
        <br />
        <button id="btn" className="btn btn-primary">
          Back to Home page
        </button>
      </div>
    );
  }
}
