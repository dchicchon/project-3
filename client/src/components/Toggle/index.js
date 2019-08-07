import React, {Component} from "react";
import CreatePost from "../CreatePost";

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
            <div>
                {/* {this.state.on && <h1>Gimme a navbar</h1> } */}
                {this.state.on && <CreatePost/>}
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        )
    }
}