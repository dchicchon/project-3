import React from "react";
import NavBar from "../components/NavBar"

import CardPanel from "../components/CardPanel"
import Post from "../components/Post"
import API from '../Utils/API'
import { Col, Row, Container } from "../components/Grid";
import CreatePost from './../components/CreatePost';
import 'materialize-css/dist/css/materialize.min.css';

import Modal from "../components/Modal";


// Import Materialize
import M from "materialize-css";
class Feed extends React.Component {
    render(){
    return (
        <div>
            <NavBar />
            <Container>

                <CreatePost/>
                <CardPanel>
                    <Post />
                </CardPanel>

                <CardPanel>
                    <Post />
                </CardPanel>
            </Container>
        </div>
    )
}
}
export default Feed;