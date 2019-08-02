// this is the Discover page

import React from "react";

import SimpleContainer from "../components/Container"
import PrimarySearchAppBar from "../components/Navbar"
import NavBar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import Container from '@material-ui/core/Container';
// import Navbar from "../components/Navbar"

// class Login extends Component {

// }

function Discover() {
  return (
    <div>

        <NavBar />
        <Container className="center">
          <div className="card-panel">
            <div className="row">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </Container>

    </div>
  );
}

export default Discover;