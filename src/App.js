import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



import Header from './comps/header/header';
import About from './pages/about/about';
import Main from './comps/main/main';
import Signin from './pages/signin/signin';
import SignUp from './pages/signup/signup';
import profile from './pages/profile/profile';
import updateProfile from './pages/profile/editProfile';
import {UserSideBar} from './pages/profile/UserSideBar/UserSideBar';
import AddVideo from './comps/main/addVideo/addVideo';
import myVideos from './comps/main/myVideo/myVideo';


function App() {
  return (
      <Router>
        <Header/>
        <Route path="/user/profile"component={profile}/>
        <Route path="/user/update/:id" component={updateProfile}/>
     
      <React.Fragment>
        <Switch>
    <div className="container">
      <div className="row">
      <div className="col">
        <Route path="/" exact component={Main}/>
        <Route path="/about" component={About} />
        <Route path="/users/signin"component={Signin}/>
        <Route path="/user/SignUp"component={SignUp}/>
        <Route path="/add/video" component={AddVideo}/>
        <Route path="/videos/all/videos" component={Main} />
        <Route path="/videos/myVideos/:id" component={myVideos}/>
    </div>
    </div>
    </div>
  
        </Switch>
     </React.Fragment>
      </Router>
  );
}

export default App;
