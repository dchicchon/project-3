import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedButtons from "../SignupBtn";




const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 1000,
    marginLeft: "10%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CreatePost() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title} color="textSecondary" gutterBottom>
          Record your Travels
        </Typography>


        {/* <Typography variant="h5" component="h2">
          Record your Travels
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}


      </CardContent>
      <CardActions>

        <OutlinedButtons>
          Upload Image
        </OutlinedButtons>
        <OutlinedButtons >
          Submit
        </OutlinedButtons>

      </CardActions>
    </Card>
  );
}