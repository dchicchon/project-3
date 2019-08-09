import React from "react";
import { Col, Row, Container } from "../Grid";
import Button from "../Button"
import SearchChip from "../SearchChips";
import { Router, Route, Link } from 'react-router-dom';

function Post(props) {

  return (

    <Col size="s6">
      <div className="card" id="posts">

        <div className="card-action">
          <Row className="center">
            <Col size="s10">
              <img src={props.image} width="80px" height="80px" alt="" position="absolute" verticle-align="center" />
               <Link to='/profile' user_id={props.user_id}>
                LINK TO PROFILE
                {/* {props.firstName} */}
              </Link> 
              {/* <Router> */}
                {/* <Route exam/> */}
              {/* </Router> */}
              <Button className="btn-small right blue" onClick={() => props.followUser(props.user_id)}>Follow</Button>
            </Col>
            {/* <Col size="s1"> */}

            {/* <span><a href="#" align="center" verticle-align="center" ></a><Button className="btn-small right blue" onClick={() => props.followUser(props.user_id)}>Follow</Button></span> */}
            {/* </Col> */}
          </Row>
        </div>



        {/* // // user photo posted */}
        <div className="card-image">
          <img src={props.image} width="300" height="350" className="activator" />

          <span className="card-title activator black-text" >{props.title}</span>

          {/* // end of photo posted */}
        </div>

        {/* // card description section */}
        <div className="card-content">


          <p className="activator">{props.location}</p>
          {/* SPACE FOR CHIPS */}
          <p className="chip disable">{props.tag}</p>


        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
          <p className="card-title">{props.info}</p>
        </div>
        {/* // end of card description */}
      </div>



    </Col>

  );
}

export default Post;