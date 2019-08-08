import React, { Component } from "react";
import CreatePost from "../CreatePost";
import './style.css'
import HeadTitle from "../HeadTitle";
import HideText from "../Toggle";
import Button from "../Button";

//TEST SIDEBAR


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
// SIDE POST SLIDE
            <div >
                <ul id="slide-out" className="sidenav"
                // dark opacity
                    // style={{ "width": 600, backgroundColor: 'rgba(0,0,0,0.5)'  }}
                // light opacity
                style={{ "width": 600, backgroundColor: 'rgba(192,192,192,0.3)'}}
                >
                    {/* <PageTitle style={{ fontSize: 2 }} >Create A Post</PageTitle> */}
                    <CreatePost/>


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
{/* text+bounce icon on hover */}
                <a href="#" data-target="slide-out" className="sidenav-trigger"> 
                <Button id="sidePost" className="btn-large #90caf9 blue lighten-3"> <i className="large material-icons right bounce" id="create-icon">create</i>
                    Create a Post
                </Button>
                </a>
            </div>
        )
    }
}

export default SidePost;