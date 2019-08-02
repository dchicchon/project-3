//Box componant
import React from 'react';
import PrimarySearchAppBar from "../Navbar"

import Box from '@material-ui/core/Box';

export default function Width(props) {
  return (
    <Box width="100%" mx="auto" bgcolor="background.paper">
      {props.children}
    </Box>
  );
}