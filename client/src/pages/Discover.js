import React from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CardPanel from "../components/CardPanel"


function Discover() {
  return (
    <div>

      <NavBar />
      <Container>
        <CardPanel>
          <Row>
            <Post></Post>
            <Post></Post>
          </Row>
        </CardPanel>
      </Container>

    </div>
  );
}

export default Discover;