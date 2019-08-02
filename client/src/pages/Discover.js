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
          <Row>
            <ProfileCard />
            <ProfileCard />

            </Row>
        </CardPanel>
      </Container>

    </div>
  );
}

export default Discover;