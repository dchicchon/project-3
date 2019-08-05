/* global google */
import React, { Component } from "react";
import CardPanel from "../components/CardPanel"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CreatePost from './../components/CreatePost';
import API from '../Utils/API'
import Modal from "../components/Modal";

// TESTING FOR AUTOCOMPLETE
import Autocomplete from "../components/AutocompleteLocation";
/* global google */
import ReactDependentScript from 'react-dependent-script';


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



    render(){

        
        const AddressDetails = props => {
            return (
                <div>
                  <pre>{JSON.stringify(props.place, null, 2)}</pre>
                </div>
            )
          };


    return (
        <div>

            {/* <ReactDependentScript
            scripts={['https://maps.googleapis.com/maps/api/js?key=AIzaSyBMaADkXGTjthhbPHVctBZQ22FQQgInOwc&libraries=places']}
            >
            <div>jQuery is loaded!</div>
            </ReactDependentScript> */}


            {/* <NavBar /> */}
            <Modal/>

            {/* AUTOCOMPLETE TESTING */}
            
             <Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)} />
             <AddressDetails place={this.state.place} />
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