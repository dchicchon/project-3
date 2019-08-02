import React, {Component} from "react";
// import Grid from "../components/Grid";
import Post from "../components/Card";
import SimpleContainer from "../components/Container";


function Feed()  {
return (
    <div>
        <SimpleContainer >
            <br/>
            <Post />
            <Post/>
        </SimpleContainer>
    </div>
)
}

export default Feed; 