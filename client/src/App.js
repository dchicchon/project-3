import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
// import Discover from './pages/Discover'
import Feed from './pages/Feed'
import Login from './pages/Login'
// import NoMatch from './pages/NoMatch'
// import Profile from './pages/Profile'
import Signup from './pages/Signup'

// Stylesheet
import './App.css';

//--------ADDED CODED---------------------
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/discover" component={Discover} /> */}
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route exact path="/feed" component={Feed} />
        </Switch>
      </Router>
    </div>
  )
};

//-----------END ADD---------------------

export default App;
