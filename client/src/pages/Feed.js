/* global google */
import React, { Component } from "react";
import CardPanel from "../components/CardPanel"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CreatePost from './../components/CreatePost';
import API from '../Utils/API'
import Modal from "../components/Modal";
import SidePost from "../components/SidePost";
import Toggle from "../components/Toggle";
import HeadTitle from "../components/HeadTitle";
import Background from "../assets/bg10.jpg"






// TESTING FOR AUTOCOMPLETE
import Autocomplete from "../components/AutocompleteLocation";
/* global google */

import MarkerInfo from "../components/MarkerInfo"

// Import Materialize
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

const divStyle = {
    backgroundImage: `url(${Background})`,
    // backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
};

const styles = {
    // position: 'fixed',
    left: '0',
    bottom: '0',
    marginTop: '15%',
    width: '100%',
    backgroundColor: '#2196f3',
    color: 'white',
    textAlign: 'center',
    opacity: '1'
  }



class Feed extends Component {
    state = {
        user_id: this.props.user_id,
        email: '',
        firstName: this.props.firstName,
        lastName: '',
        image: '',
        // followIds: {},
        followPosts: {},
        place: {}
        
    }
    

    showPlaceDetails(place) {
        this.setState({ place });
    }

    async componentDidMount() {
        console.log("BRING IN FOLLOWERS")
        API.getFollowPosts(this.state.user_id).then(res => {
            console.log("\nFOLLOWING POST ARRAY")
            console.log(res)
            this.setState({
                followPosts: res.data
            })
            // var followingArr = []
            // for (var i = 0; i < res.data.length; i++) {
            //     followingArr.push(res.data[i].follower_id)
            // }
            // console.log(followingArr)
            // this.setState({
            //     followIds: followingArr
            // })
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
            <div style={divStyle}>

                {/* <NavBar /> */}
                {/* <Modal /> */}

                {/* <SidePost /> */}
                {/* <Toggle/> */}

                {/* AUTOCOMPLETE TESTING */}
                {/* <Autocomplete id="location" name="location" value={this.state.location} onPlaceChanged={this.showPlaceDetails.bind(this)} />
                <AddressDetails place={this.state.place} value={this.state.location}/> */}
                {/* <CreatePost user_id={this.state.user_id} /> */}
                
                <HeadTitle>Follow Feed</HeadTitle>

{/* <Container>
    <CardPanel>
        <SidePost user_id={this.state.user_id}/>
    </CardPanel>
</Container> */}

{/* <SidePost/> */}

                <Container>

                <CreatePost user_id={this.state.user_id} />
                    <CardPanel>
                        <Row>
                            {(this.state.followPosts.length) ?
                                this.state.followPosts.map((post, i) => (
                                    <Post
                                        key={i}
                                        title={post.title}
                                        info={post.info}
                                        location={post.location}
                                        tag={post.tag}
                                        user_id={post.user_id}

                                    />
                                )) : "No Posts"
                            }
                        </Row>
                    </CardPanel>
                </Container>
                <CardPanel style={styles}></CardPanel>
            </div>
        )

    }
}

export default Feed;