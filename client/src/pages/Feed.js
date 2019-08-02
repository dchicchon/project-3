import React, { Component } from "react";
// import Grid from "../components/Grid";
import Post from "../components/Post";
import SimpleContainer from "../components/Container";
import CreatePost from "../components/CreatePost";
import API from '../Utils/API'

function Feed(props) {
    return (
        <div>
            <SimpleContainer style={{ display: 'flex', justifyContent: 'center' }}>
                <br />
                <CreatePost />
                <br />
                <Post />
                <Post />
                <button onClick = {props.logout}>LOGOUTTUOOTOONF</button>
            </SimpleContainer>
        </div>
    )
}

export default Feed; 