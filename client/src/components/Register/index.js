import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import OutlinedButtons from "../../components/RegisterBtn";
import {Link} from "react-router-dom";



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

export default function OutlinedTextFields(props) {
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
        <form className={classes.container} noValidate autoComplete="off" style={{justifyContent: "center"}}>

            <TextField style={{width:300}}
                // id="outlined-dense"
                label="First Name"
                className={clsx(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                //things I've added for state
                // id={this.props.elementID}
                // name={this.props.name}
                // type={this.props.inputType}
                // required={this.props.required}
                // onChange={(e)=>this.props.handleChange(e)}
                //have not added onChange, className, minLength, size
                
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
  
            <Link to="/feed">
            <OutlinedButtons>
                <div className="register-btn" style={{  width:100 }}>
                    Sign up! 
                </div>
            </OutlinedButtons> 
            </Link>
            
        </form>
    );
}