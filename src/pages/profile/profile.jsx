import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { editProfile, userInfo } from "../../data/UserFunctions";
import { Link } from "react-router-dom";
import { json } from "body-parser";
import { UserSideBar } from "./UserSideBar/UserSideBar";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: ""
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("usertoken");

    // const name = localStorage.getItem('fname')

    if (token) {
      try {
        //{Error} = The string to be decoded is not correctly encoded.
        const decoded = jwt_decode(token);

        userInfo(decoded.id)
          .then(res =>
            this.setState({
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              email: res.data.email,
              phone: res.data.phone,
              id: res.data.id
            })
          )
          .catch(err => console.log(err));
      } catch (err) {
        console.log({ error: err });
      }
    } else {
      console.log("empty token");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-3 mr-auto">
          <UserSideBar id={this.state.id} />
        </div>

        <div className="col-8 ml-auto">
          <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4 mt-3 text-center">
              Welcome {this.state.first_name}
            </h1>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.first_name}</td>
                <td>{this.state.last_name}</td>
                <td>{this.state.email}</td>
                <td>{this.state.phone}</td>
                <td>
                  <Link to={`/user/update/${this.state.id}`}>
                    <i className="fa fa-cog"></i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div />
      </React.Fragment>
    );
  }
}

export default Profile;
