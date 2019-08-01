import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            {/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
></Grid> */}

            <TextField style={{width:300}}
                id="outlined-dense"
                label="First Name"
                className={clsx(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                // value={this.state.firstName}
            />
            <br></br> 
            <TextField style={{width:300}}
                id="outlined-dense"
                label="Last Name"
                className={clsx(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                // value={this.state.lastName}
            />
            <br></br>
            <TextField style={{width:300}}
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                // value={this.state.email}
            />
            <br></br>
            <TextField style={{width:300}}
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                // value={this.state.password}
            />
            <br></br>
            <TextField style={{width:300}}
                id="outlined-password-input"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                // value={this.state.passwordConfirm}
            />
            <br></br>

        </form>
    );
}