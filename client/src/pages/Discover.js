// this is the Discover page

import React from "react";
<<<<<<< HEAD
import NavBar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
=======
import Width from "../components/Box";
import SimpleContainer from "../components/Container";
import PrimarySearchAppBar from "../components/Navbar";
// import IntegrationReactSelect from "../components/Searchbar";
>>>>>>> 33e6f049e8ffdeb17c7f199888e7d907aa0dae92
import Container from '@material-ui/core/Container';


function Discover() {
  return (
    <div>
<<<<<<< HEAD

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
=======
      <PrimarySearchAppBar />
      <Container>
        <Container>
        {/* <IntegrationReactSelect /> */}
>>>>>>> 33e6f049e8ffdeb17c7f199888e7d907aa0dae92
        </Container>

    </div>
  );
}

export default Discover;