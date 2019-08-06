/* global google */
import React, { Component } from "react";
import CardPanel from "../components/CardPanel"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CreatePost from './../components/CreatePost';
import API from '../Utils/API'
import Modal from "../components/Modal";
import SidePost from "../components/SidePost";

// TESTING FOR AUTOCOMPLETE
import Autocomplete from "../components/AutocompleteLocation";
/* global google */



// Import Materialize
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import HeadTitle from "../components/PageTitle";

class Feed extends Component {
    state = {
        user_id: this.props.user_id,
        email: '',
        firstName: this.props.firstName,
        lastName: '',
        image: '',

        // TESTING AUTOCOMPLETE
        place: {}
    }

    showPlaceDetails(place) {
        this.setState({ place });
    }




    render() {
        const AddressDetails = props => {
            return (
                <div>
                    <pre>{JSON.stringify(props.place, null, 2)}</pre>
                </div>
            )
        };


        return (
            <div>
                {/* <NavBar /> */}
                {/* <Modal /> */}

                {/* AUTOCOMPLETE TESTING */}
                {/* <Autocomplete id="location" name="location" value={this.state.location} onPlaceChanged={this.showPlaceDetails.bind(this)} />
                <AddressDetails place={this.state.place} value={this.state.location}/> */}
                <SidePost/>
                <CreatePost user_id = {this.state.user_id} />

                <Container>
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
// import Autocomplete from './../components/AutocompleteLocation/index';
// import CreatePost from './../components/CreatePost/index';


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