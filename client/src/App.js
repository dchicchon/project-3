import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Discover from './pages/Discover'
import Feed from './pages/Feed'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Profile from './pages/Profile'
import Register from './pages/Register'

// Components
import Navbar from './components/Navbar'

// Stylesheet
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
