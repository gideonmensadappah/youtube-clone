import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./comps/header/header";
import About from "./pages/about/about";
import Main from "./comps/main/main";
import Signin from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import profile from "./pages/profile/profile";
import updateProfile from "./pages/profile/editProfile";
import AddVideo from "./comps/main/addVideo/addVideo";
import { UserVideo } from "./comps/main/myVideo/myVideo";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route path="/user/profile" component={profile} />
        <Route path="/user/update/:id" component={updateProfile} />
        <div className="container">
          <div className="row">
            <div className="col">
              <Route path="/" exact component={Main} />
              <Route path="/about" component={About} />
              <Route path="/users/signin" component={Signin} />
              <Route path="/user/SignUp" component={SignUp} />
              <Route path="/add/video" component={AddVideo} />
              <Route path="/videos/myVideos/:id" component={UserVideo} />
            </div>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
