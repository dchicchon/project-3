import React from "react"
import Grid from "../components/Grid"


import SimpleContainer from "../components/Container"
import NavBar from "../components/Navbar"
import ImgMediaCard from '../components/Card'
// import Navbar from "../components/Navbar"

// class Login extends Component {

// }

function Profile() {
    return (
      <div>
        <SimpleContainer>
           <NavBar />
           <ImgMediaCard/>
           
 
        </SimpleContainer>
      </div>
    );
  }
  
  export default Profile;