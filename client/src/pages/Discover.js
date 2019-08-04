import React from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CardPanel from "../components/CardPanel"

import SearchInput from "../components/SearchInput"


function Discover(props) {
  return (
    <div>

      <NavBar />
      <Container>
        <CardPanel>
        <SearchInput>Search Tag</SearchInput>
        </CardPanel>
        <CardPanel>
          <Row>
            <Post/>
            <Post/>
          </Row>
        </CardPanel>
      </Container>

    </div>
  );
}

export default Discover;