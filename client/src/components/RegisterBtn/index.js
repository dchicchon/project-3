import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button onClick={props.onClick} variant="outlined" color="primary" className={classes.button}>
{props.children}
      </Button>
    </div>
  );
}