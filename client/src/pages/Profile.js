import React from "react"

import NavBar from "../components/NavBar"

import CardPanel from "../components/CardPanel"
import ProfileCard from '../components/ProfileCard'
import Button from "../components/Button"

import { Col, Row, Container } from "../components/Grid";


function Profile(props) {
    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    <Col size="s4">
                        <CardPanel>
                            <CardPanel>
                                <img src="https://i.ibb.co/v3f2zKn/defaultprofilepic.png" />
                            </CardPanel>
                        </CardPanel>
                    </Col>

                    <Col size="s8">
                        <CardPanel>
                            <ProfileCard />
                        </CardPanel>
                    </Col>
                </Row>
                <CardPanel>
                    <img src="https://i.ibb.co/xzGNCdJ/world-map.gif" />
                </CardPanel>
            </Container>
        </div>
    );
}

export default Profile;

