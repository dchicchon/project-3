import React from "react";

import { Col, Row, Container } from "../Grid";



function ProfileCard(props) {
  return (
    <div>
    <Row>
      <Col size="s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Bio</span>
            <p>I am a very simple cardI am a very simple cardI am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">

          </div>
        </div>
      </Col>
      </Row>
      </div>
  );
}

export default ProfileCard;
