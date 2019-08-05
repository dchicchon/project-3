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
            <p>{props.bio}</p>
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
