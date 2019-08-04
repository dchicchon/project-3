import React, { Component } from "react";
import CardPanel from "../components/CardPanel"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CreatePost from './../components/CreatePost';

import API from '../Utils/API'


// Import Materialize
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

class Feed extends Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        image: ''
    }

    render(){
    return (
        <div>
            {/* <NavBar /> */}
            <Container>

                <CreatePost/>
                <CardPanel>
                    {/* <Container> */}
                    <Row>
                        <Post />
                        <Post />
                    </Row>
                    {/* </Container> */}
                </CardPanel>
            </Container>
        </div>
    )
    }
}


// import CreatePost from "../components/CreatePost";
// import API from '../Utils/API'
// import { Col, Row, Container } from "../components/Grid";

// =================================================DANNY====================================================================
// class Feed extends Component {
//     state = {
//         email: '',
//         firstName: '',
//         lastName: '',
//         image: ''
//     }

//     render() {
//         return (
//             <div>
//                 {/* <h1>{this.props.email}</h1> */}
//                 {/* <NavBar/> */}
//                 {/* <NavBar logout = {this.props.logout} /> */}
//                 <Container>
//                     <CreatePost />
//                     <CardPanel>
//                         <Post />
//                     </CardPanel>
//                     <CardPanel>
//                         <Post />
//                     </CardPanel>

//                 </Container>

//             </div>
//         )
//     }
// }


export default Feed;