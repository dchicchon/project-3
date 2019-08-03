import React from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CardPanel from "../components/CardPanel"
import SearchFor from "../components/Searchbar"

function Discover(props) {
  return (
    <div>

      <NavBar />
      <Container>
        <SearchFor />
        <CardPanel>
          <Row>
            <Post />
            <Post />
          </Row>
        </CardPanel>
      </Container>

    </div>
  );
}

export default Discover;