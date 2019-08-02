import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from "../components/NavBar"

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
                <NavBar logout = {this.props.logout} />
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

// function Feed(props) {
//     return (
//         <div>

//         </div>
//     )
// }

export default Feed;