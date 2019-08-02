import React from "react";
import NavBar from "../components/NavBar"
import ProfileCard from "../components/ProfileCard"
import { Col, Row, Container } from "../components/Grid";
import CardPanel from "../components/CardPanel"


function Discover() {
  return (
    <div>

      <NavBar />
      <Container>
        <CardPanel>
          <div className="row">
            <ProfileCard />
            <ProfileCard />

          </div>
        </CardPanel>
      </Container>

    </div>
  );
}

export default Discover;