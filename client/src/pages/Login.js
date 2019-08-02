
import React, { Component } from "react";
// import TextFields from "../components/Login"
// import Grid from "../components/Grid"
// import OutlinedTextFieldsLogin from "../components/Login";
// import OutlinedButtons from "../../../-Edited-Signup";
// class Login extends Component {
// }

import TextField from '@material-ui/core/TextField'
import { makeStyles } from "@material-ui/core/styles"

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
      <form className={classes.container} noValidate autoComplete="off" style={{ justifyContent: "center" }}>
        <TextField style={{ width: 300 }}
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={values.email}
        />
        <br />
        <TextField style={{ width: 300 }}
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          variant="outlined"
          value={values.passport}
        />
      </form>
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


