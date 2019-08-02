import React from "react"
import Grid from "../components/Grid"


import SimpleContainer from "../components/Container"

import ProfileCard from '../components/ProfileCard'
import Container from '@material-ui/core/Container';


import NavBar from "../components/Navbar"

import Card from '@material-ui/core/Card';
// class Login extends Component {

// }

function Profile() {
    return (
        <div>
            <NavBar />
            <Container className="center">
                <div className="card-panel">
                    <div className="row">
                    <div className="col s10">
                    <Card></Card>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Profile;