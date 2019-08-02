import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import IntegrationReactSelect from "../Searchbar"
// import SearchAppBar from "../Searchbar"
import TextFields from "../Searchbar"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
        <IntegrationReactSelect />
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs>
          {/* <Paper className={classes.paper}>xs</Paper> */}
        </Grid>
        <Grid item xs={4}>
        {/* <IntegrationReactSelect /> */}
        {/* <SearchAppBar style = "marginTop: 20"/> */}
        <TextFields />
        </Grid>
        <Grid item xs>
          {/* <Paper className={classes.paper}>xs</Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}