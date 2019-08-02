import React from "react";
import NavBar from "../components/NavBar"

import CardPanel from "../components/CardPanel"
import Post from "../components/Post"
import API from '../Utils/API'
import { Col, Row, Container } from "../components/Grid";


function Feed(props) {
    return (
        <div>
            <NavBar />
            <CardPanel>
                <Post />
            </CardPanel>
            <CardPanel>
                <Post />
            </CardPanel>
        </div>
    )
}

export default Feed;


{/* <Container style={{ display: 'flex', justifyContent: 'center' }}>

                <button onClick = {props.logout}>LOGOUTTUOOTOONF</button>
            </Container> */}