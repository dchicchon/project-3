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
        posts: {

        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    async componentDidMount() {
        await API.getPosts()
    }

    render() {
        return (
            <div>

                <NavBar />
                <Container>
                    <HeadTitle />
                    <SearchFor />
                    <SearchChip />
                    <CardPanel>
                        <Row>
                            <Post />
                            <Post />
                        </Row>
                    </CardPanel>
                </Container>

            </div>
        );
    }



}

export default Discover;