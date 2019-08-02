import React from "react";
import clsx from 'clsx';
import Grid from "../components/Grid"
import TextField from '@material-ui/core/TextField'
import { makeStyles } from "@material-ui/core/styles"
import SignupBtn from '../components/SignupBtn';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

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

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  };

  const formSubmit = async event => {
    event.preventDefault()
    console.log("WE MADE IT TO THE FORM SUBMIT");
    await fetch("/auth/login", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    })
      .then(response => {
        console.log(response)
        window.location.href = "/"
      })
      .catch(err => console.log(err))

    setValues({
      email: '',
      password: ''
    });

  }

  return (
    <div>
      <Container>
        <h1>Login</h1>
        <form className={classes.container} noValidate autoComplete="off" style={{ justifyContent: "center" }}>

          <TextField style={{ width: 300 }}
            // id="outlined-email-input"
            label="Email"
            className={clsx(classes.textField, classes.dense)}
            type="email"
            // name="email"
            // autoComplete="email"
            margin="normal"
            variant="outlined"
            value={values.email}
            onChange={handleChange('email')}
          />
          <br />
          <TextField style={{ width: 300 }}
            id="outlined-password-input"
            label="Password"
            className={clsx(classes.textField, classes.dense)}
            type="password"
            name="password"
            autoComplete="password"
            margin="normal"
            variant="outlined"
            value={values.password}
            onChange={handleChange('password')}
          />
          <br />
          <SignupBtn>
            <div className="login-btn" onClick={formSubmit} style={{ width: 100 }}>
              Login
            </div>
          </SignupBtn>
          <Link to="/signup">
            <SignupBtn>
              <div className="signup-btn" style={{ width: 100 }}>
                Signup
              </div>
            </SignupBtn>
          </Link>
        </form>
        </Container>
    </div>
  )
}
