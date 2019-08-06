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
        followIds: {},
        posts: {},
        place: {}
    }

    showPlaceDetails(place) {
        this.setState({ place });
    }

    async componentDidMount() {
        console.log("BRING IN FOLLOWERS")
        API.getFollowIds(this.state.user_id).then(res => {
            console.log("\nFOLLOW ARRAY")
            console.log(res.data)
            this.setState({
                followIds: res.data
            })
        })

        // API.getFollowPosts().then(res => {
        //     console.log(res.data)
        //     this.setState({
        //         posts: res.data
        //     })
        // })
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
                <CreatePost user_id={this.state.user_id} />

                <Container>
                    <CardPanel>
                        {/* <Container> */}
                        <Row>
                            {(this.state.posts.length)}
                            <Post />
                        </Row>
                    </CardPanel>
                </Container>
            </div>
        )

    }
}

export default Feed;