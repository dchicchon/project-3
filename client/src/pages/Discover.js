import React, { Component } from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CardPanel from "../components/CardPanel"
import SearchFor from "../components/Searchbar"
import HeadTitle from "../components/PageTitle"
import SearchChip from "../components/SearchChips"


import BackgroundSlider from 'react-background-slider'
import image4 from '../assets/bg4.jpg';
import image5 from '../assets/bg5.jpg';
import image6 from '../assets/bg6.jpg';

// Utils

import API from "../Utils/API"
import { setServers } from "dns";

const divStyle = {
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
};


class Discover extends Component {
    state = {
        user_id: this.props.user_id,
        search: '',
        posts: {}
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    followUser = (id) => {
        console.log("WE FOLLOWED THE USER")
        // console.log(event.target.data("user_id"))
        const idPackage = {
            user_id: this.state.user_id,
            follow_id: parseInt(id)
        }
        console.log(idPackage)

        API.followUser(idPackage).then(res => console.log(res))

    }

    // For now until we figure out how to get posts based on tags!
    async componentDidMount() {
        console.log("DISCOVER PAGE")
        API.getPosts().then(res => {
            console.log(res.data)
            this.setState({
                posts: res.data
            })
        })
    }

    render() {
        return (
            <div>

                <Container>
                    <HeadTitle>Discover</HeadTitle>
                    <SearchFor />
                    <SearchChip />
                    <CardPanel>
                        <Row>
                            {(this.state.posts.length) ? this.state.posts.map((post, i) => (
                                <Post
                                    followUser={this.followUser}
                                    key={i}
                                    title={post.title}
                                    info={post.info}
                                    location={post.location}
                                    tag={post.tag}
                                    user_id={post.user_id}
                                />
                            )) : "No Posts"}

                        </Row>
                    </CardPanel>

                </Container>
                    <div style={divStyle} ><BackgroundSlider  images={[image4, image5, image6]} duration={5} transition={2} /></div>
            </div>
        );
    }



}

export default Discover;