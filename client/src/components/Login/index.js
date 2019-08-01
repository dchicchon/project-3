
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function TextFields() {
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
     
      
      <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      
      <TextField
        id="standard-dense"
        label="Dense"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />
    </form>
  );
}







// import React, { Component } from "react";

// class LogIn extends Component {

//    state = {
//       username: "",
//       password: ""
//    };

//    handleInputChange = event => {
//       const { name, value } = event.target;
//       this.setState({
//          [name]: value
//       });
//    };

//    handleFormSubmit = event => {
//       event.preventDefault();

//       fetch("/auth/login", {
//          method: "POST",
//          credentials: "include",
//          mode: "cors",
//          body: JSON.stringify({
//             username: this.state.username,
//             password: this.state.password
//          }),
//          headers: new Headers({
//             "Content-Type": "application/json"
//          })
//       })
//          .then(response => {
//             console.log(response);
//             window.location.href = "/";
//          })
//          .catch(err => {
//             console.log(err);
//          });

//       this.setState({
//          username: "",
//          password: ""
//       });
//    };

//    render() {
//       return (
//          <div>
//             <form>
//                   <input
//                      value={this.state.username}
//                      name="username"
//                      onChange={this.handleInputChange}
//                      type="text"
//                      placeholder="Username"
//                   />
//                   <input
//                      value={this.state.password}
//                      name="password"
//                      onChange={this.handleInputChange}
//                      type="password"
//                      placeholder="Password"
//                   />
//                   <button onClick={this.handleFormSubmit}>
//                      Log In
//                   </button>
//             </form>
//          </div>
//       );
//    }
// }

// export default LogIn;