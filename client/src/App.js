import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
// import Discover from './pages/Discover'
import Feed from './pages/Feed'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
// import Profile from './pages/Profile'
import Signup from './pages/Signup'

// Components
import NavBar from "./components/NavBar"

// import BackgroundSlideshow from 'react-background-slideshow';
// import image1 from './assets/bg1.jpg';
// import image2 from './assets/bg2.jpg';
// import image3 from './assets/bg3.jpg';

// Utils
import API from "./Utils/API"

// Stylesheet
import './App.css';

//--------ADDED CODED---------------------

class App extends Component {
  state = {
    isLoggedin: false,
    id: ''
  }

  async componentDidMount() {
    await API.getUser()
      .then(user => {
        console.log(user);
        this.setState({
          isLoggedin: user.data.isLoggedin,
          id: user.data.id
        })
      })
  }

  logout() {
    API.logout()
      .then(res => {
        window.location.reload();
      })
  }

  render() {

    if (this.state.isLoggedin === false) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/discover" component={Discover} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/feed" component={Feed} /> */}
          </Switch>
          {/* <BackgroundSlideshow images={[image1, image2, image3]} /> */}
        </Router>
      )
    } else {
      return (
        <Router>
          <NavBar logout={this.logout} />
          <Switch>
            <Route exact path="/"
              component={
                () => <Feed
                  email={this.state.email}
                />

              }

            />
          </Switch>
        </Router>
      )
    }

  }

};



//-----------END ADD---------------------

export default App;
