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

// function Discover(props) {
//   return (
//     <div>

//       <NavBar />
//       <Container>
//         <HeadTitle />
//         <SearchFor />
//         <SearchChip />
//         <CardPanel>
//           <Row>
//             <Post />
//             <Post />
//           </Row>
//         </CardPanel>
//       </Container>

//     </div>
//   );
// }

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

    // handleRenderPosts() {

    //     // (this.state.posts.length) ?
    //     //     this.state.posts.map(post => (posts, i) = <Post />)

    //     {(this.state.posts.length)? 

    //     }

    // }

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
                                    key = {i}
                                    title={post.title}
                                    info = {post.info}
                                    location = {post.location}
                                    tag = {post.tag}
                                    id = {post.user_id}
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