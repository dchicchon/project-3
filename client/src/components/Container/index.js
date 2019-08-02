//container componant

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from "../Navbar"

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        {/* <PrimarySearchAppBar /> */}
        {props.children}
      </Container>
    </React.Fragment>
  );
}