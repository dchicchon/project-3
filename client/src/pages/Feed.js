import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import NavBar from "../components/NavBar"

import CardPanel from "../components/CardPanel"
import Post from "../components/Post"
import API from '../Utils/API'
import { Col, Row, Container } from "../components/Grid";

class Feed extends Component {
    state = {
        email: ''
    }

    render() {
        return (
            <div>
                {/* <h1>{this.props.email}</h1> */}
                {/* <NavBar/> */}
                {/* <NavBar logout = {this.props.logout} /> */}
                <CardPanel>
                    <Post />
                </CardPanel>
                <CardPanel>
                    <Post />
                </CardPanel>
            </div>
        )
    }
}


export default Feed;