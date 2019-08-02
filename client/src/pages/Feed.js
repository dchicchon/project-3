import React, {Component} from "react";
// import Grid from "../components/Grid";
import Post from "../components/Post";
import SimpleContainer from "../components/Container";


function Feed()  {
return (
    <div>
        <SimpleContainer style={{ display:'flex', justifyContent:'center' }}>
            <br/>
            <Post />
            <Post/>
        </SimpleContainer>
    </div>
)
}

export default Feed; 