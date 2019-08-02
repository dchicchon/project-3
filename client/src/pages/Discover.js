// this is the Discover page

import React from "react";
import NavBar from "../components/NavBar"
import ProfileCard from "../components/ProfileCard"
import Container from '@material-ui/core/Container';


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