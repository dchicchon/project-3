import React, { Component } from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CardPanel from "../components/CardPanel"
import SearchFor from "../components/Searchbar"
import HeadTitle from "../components/PageTitle"
import SearchChip from "../components/SearchChips"

// Utils

import API from "../Utils/API"
import { setServers } from "dns";

class Discover extends Component {
    state = {
        search: '',
        posts: {}
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    followUser = (event) => {
        console.log("WE FOLLOWED THE USER")
        // console.log(event.target.user_id)
        const idPackage = {
            user_id: event.target.user_id
        }

        API.followUser(idPackage).then(res => console.log(res))

    }

    // handleRenderPosts() {

    //     // (this.state.posts.length) ?
    //     //     this.state.posts.map(post => (posts, i) = <Post />)

    //     {(this.state.posts.length)? 

    //     }

    // }

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

            </div>
        );
    }



}

export default Discover;