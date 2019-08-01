import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
import OutlinedTextFieldsLogin from "../Login";
import OutlinedTextFields from "../Register";
import OutlinedButtons from "../RegisterBtn";




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        margin: 'auto',
        maxWidth: 375,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ padding: 100 }}>
            <Paper className={classes.paper}>
                <h1 style={{ textAlign: "center" }}>Create an account!</h1>
                <Grid container spacing={2}
                    style={{ paddingLeft: 30 }}>
                    {props.children}
                    {/* <div className="register-btn" style={{ paddingLeft: 100 }}>
                        <OutlinedButtons>Sign up! </OutlinedButtons> 
                        </div> */}
                </Grid>
            </Paper>
        </div>
    );
}