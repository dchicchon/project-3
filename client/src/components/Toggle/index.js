import React, {Component} from "react";
import CreatePost from "../CreatePost";
import './style.css'




export default class Toggle extends React.Component{
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    };


    render() {
        return(
            <div >
                <div id="slide">
                {/* {this.state.on && <h1>Gimme a navbar</h1> } */}
                {this.state.on && <CreatePost />}
                <button onClick={this.toggle}>Submit A Post</button>
                </div>
            </div>
        )
    }
}