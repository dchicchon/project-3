import React, { Component } from "react";
import CreatePost from "../CreatePost";
import './style.css'
import PageTitle from "../PageTitle";
import HideText from "../Toggle";
import Button from "../Button";

// Import Materialize
import M from "materialize-css";


//TEST SIDEBAR
// var sidenavbar = React.createClass({
//     render: function() {
//       return (
//         <div>
//           function openNav() {'{'}
//           document.getElementById("sidenav").style.width = "500px";
//           document.getElementById("body").style.marginLeft = "500px";
//           {'}'}
//           function closeNav() {'{'}
//           document.getElementById("sidenav").style.width = "0";
//           document.getElementById("body").style.marginLeft= "0";
//           {'}'}
//         </div>
//       );
//     }
//   });


class SidePost extends Component {


    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (

            <div >
                <ul id="slide-out" className="sidenav"
                    style={{ "width": 600, backgroundColor: 'rgba(0,0,0,0.5)'  }}
                >
                    {/* <PageTitle style={{ fontSize: 2 }} >Create A Post</PageTitle> */}
                    <CreatePost style={{color: "black"}} />


                    {/* <li><div className="user-view">
                    <div className="background">
                        <img src="images/office.jpg"/>
                    </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li> */}
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"> 
                <Button id="sidePost">
                    Create a Post
                </Button>
                </a>
            </div>
        )
    }
}

export default SidePost;