import clsx from 'clsx';
import React from "react";
import Grid from "../components/Grid"
import TextField from '@material-ui/core/TextField'
import { makeStyles } from "@material-ui/core/styles"
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../assets/bg1.jpg';
import image2 from '../assets/bg2.jpg';
import image3 from '../assets/bg3.jpg';

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

  return (
    <div>
      <Grid>
        {/* <h1>Email: {values.email}</h1>
        <h1>Password: {values.password}</h1> */}
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
        </form>
      </Grid>
      <BackgroundSlideshow images={[ image1, image2, image3 ]} />
    </div>
  )
}

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   handleFormSubmit = async event => {
//     event.preventDefault();

//     await fetch("/auth/login", {
//       method: "POST",
//       credentials: "include",
//       mode: "cors",
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password
//       }),
//       // headers: new Headers({
//       //   "Content-Type": "application/json"
//       // })
//     })
//       .then(response => {
//         console.log(response);
//         window.location.href = "/";
//       })
//       .catch(err => {
//         console.log(err);
//       });

//     this.setState({
//       username: "",
//       password: ""
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello?</h1>
//         <form>
//           <TextField
//             id="outlined-email-input"
//             label="Email"
//             // className={classes.textField}
//             type="email"
//             name="email"
//             autoComplete="email"
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField

//           />
//         </form>
//       </div>
//     )

//   }

// }

// export default Login;


