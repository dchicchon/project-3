//Box componant
import React from 'react';
import PrimarySearchAppBar from "../Navbar"

import Box from '@material-ui/core/Box';

export default function Width() {
  return (
    <Box width="100%" bgcolor="background.paper">
      <PrimarySearchAppBar />
    </Box>
  );
}