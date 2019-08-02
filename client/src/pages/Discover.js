// this is the Discover page

import React from "react";
import Width from "../components/Box"
import SimpleContainer from "../components/Container"
import PrimarySearchAppBar from "../components/Navbar"
import IntegrationReactSelect from "../components/Searchbar"
import Container from '@material-ui/core/Container';

// class Login extends Component {

// }

function Discover() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Width>
        
        <IntegrationReactSelect style = {{marginTop: 20}} />
        
      </Width>
    </div>
  );
}

export default Discover;