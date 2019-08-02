import React from "react";
// import Grid from "../components/Grid";

import CreatePost from "../components/CreatePost";
import API from '../Utils/API'
import { Col, Row, Container } from "../components/Grid";


function Feed(props) {
    return (
        <div>
            <Container style={{ display: 'flex', justifyContent: 'center' }}>

                <button onClick = {props.logout}>LOGOUTTUOOTOONF</button>
            </Container>
        </div>
    )
}

export default Feed; 