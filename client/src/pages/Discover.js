// this is the Discover page

import React from "react";
import NavBar from "../components/NavBar"
import ProfileCard from "../components/ProfileCard"
import Container from '@material-ui/core/Container';


function Discover() {
  return (
    <div>

        <NavBar />
        <Container>
          <div className="card-panel center">
            <div className="row">
              <ProfileCard />
              <ProfileCard />

            </div>
          </div>
        </Container>

    </div>
  );
}

export default Discover;