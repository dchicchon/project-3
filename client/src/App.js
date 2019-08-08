import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Feed from './pages/Feed'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Signup from './pages/Signup'

// import Footer from './components/Footer'

// materialize
import 'materialize-css/dist/css/materialize.min.css';
// Components
import NavBar from "./components/NavBar"

//background slideshow
// import BackgroundSlideshow from 'react-background-slideshow';
// import image1 from './assets/bg1.jpg';
// import image2 from './assets/bg2.jpg';
// import image3 from './assets/bg3.jpg';

//background inner pages
// import BackgroundSlider from 'react-background-slider'
// import image4 from './assets/bg4.jpg';
// import image5 from './assets/bg5.jpg';
// import image6 from './assets/bg6.jpg';

//npm package
// import UnsplashApiSlider from "../src/components/UnsplashSlider"


// Utils
import API from "./Utils/API"

// Stylesheet
import './App.css';




//--------ADDED CODED---------------------

class App extends Component {
  state = {
    isLoggedin: false,
    user_id: '',
    firstName: ''
    
  }

  async componentDidMount() {
    await API.getUser()
      .then(user => {
        console.log(user);
        console.log("hit app.js com")
        this.setState({
          isLoggedin: user.data.isLoggedin,
          user_id: user.data.id,
          firstName: user.data.firstName

        })
      })
  }

  logout() {
    API.logout()
      .then(res => {
        console.log("We logged out")
        // var location = "http://localhost:3000"
        // window.location.pathname("/")
        window.location = "http://localhost:3000"

      })
  }

  render() {

    if (this.state.isLoggedin === false) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/" component={UnsplashApiSlider} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />

          </Switch>
          {/* <BackgroundSlideshow images={[image1, image2, image3]} /> */}
        </Router>
      )
    } else {
      return (
        <Router>
          <NavBar firstName={this.state.firstName} logout={this.logout} />
          <Switch>
            <Route exact path="/" component={() => <Feed firstName={this.state.firstName} user_id={this.state.user_id} />} />
            <Route exact path="/discover" component={() => <Discover firstName={this.state.firstName} user_id={this.state.user_id} />} />
            <Route exact path="/profile" component={() => <Profile firstName={this.state.firstName} user_id={this.state.user_id}/>} />

            {/* // () => <Feed */}
            {/* // email={this.state.email}
                // />
              // }

            /> */}
          </Switch>
            {/* <Footer/> */}
          {/* <BackgroundSlider images={[image4, image5, image6, image7, image8, image9, image10, image11]} duration={5} transition={2}/> */}
        </Router>
        
      )
    }

  }

};



//-----------END ADD---------------------

export default App;
