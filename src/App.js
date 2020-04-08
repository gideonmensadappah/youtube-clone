import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./comps/header/header";
import About from "./pages/about/about";
import Main from "./comps/main/main";
import Signin from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import profile from "./pages/profile/profile";
import updateProfile from "./pages/profile/editProfile";
import AddVideo from "./comps/main/addVideo/addVideo";
import { UserVideo } from "./comps/main/myVideo/myVideo";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SearchBar from "./comps/header/searchBar.jsx";
import SearchPage from "./pages/search/searchPage";
function App() {
  const style = {
    padding: "60px",
    marginTop: "50px",
  };
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={SearchBar} />
        <Header />
        <Switch>
          <Route path="/user/profile" component={profile} />
          <Route path="/user/update/:id" component={updateProfile} />
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/users/signin" component={Signin} />
          <Route path="/user/SignUp" component={SignUp} />
          <Route path="/add/video" component={AddVideo} />
          <Route path="/videos/myVideos/:id" component={UserVideo} />
          <Route pah="/search/:query?q=val/:" component={SearchPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
