// this is the Discover page

import React from "react";
import Width from "../components/Box"
import SimpleContainer from "../components/Container"
import PrimarySearchAppBar from "../components/Navbar"
// import IntegrationReactSelect from "../components/Searchbar"
import Container from '@material-ui/core/Container';
import AutoGrid from '../components/Griddiscover';
import TextFields from "../components/Griddiscover"
// class Login extends Component {

// }

function Discover() {
  return (
    <div>
      <PrimarySearchAppBar />
      {/* <SimpleContainer style={{ display: 'flex', justifyContent: 'center' }}> */}
      <AutoGrid>
       
        {/* <IntegrationReactSelect style = {{marginTop: 20}} /> */}
        <TextFields />
      </AutoGrid>
      {/* </SimpleContainer> */}
    </div>
  );
}

export default Discover;