import React from "react"

import NavBar from "../components/NavBar"

import CardPanel from "../components/CardPanel"
import Button from "../components/Button"

import { Col, Row, Container } from "../components/Grid";


function Profile() {
    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    <Col size="s4">
                        <CardPanel>
                        </CardPanel>
                    </Col>

                    <Col size="s8">
                        <CardPanel>
                        </CardPanel>
                    </Col>
                </Row>
                <CardPanel>

                </CardPanel>
            </Container>
        </div>
    );
}

export default Profile;

