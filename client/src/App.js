import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
import Discover from './pages/Discover'
import Feed from './pages/Feed'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Profile from './pages/Profile'
import Signup from './pages/Signup'

// materialize
import 'materialize-css/dist/css/materialize.min.css';

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

    // if (this.state.isLoggedin === false) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/feed" component={Feed} />

          </Switch>
        </Router>
      )
  //   } else {
  //     return (
  //       <Router>
  //         <Switch>
  //           <Route exact path="/"
  //             component={
  //               () => <Feed
  //                 logout={this.logout}
  //                 email={this.state.email}
  //               />

  //             }

  //           />
  //         </Switch>
  //       </Router>
  //     )
  //   }

  // }

};
}


//-----------END ADD---------------------

export default App;
