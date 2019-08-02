// this is the main dashbaord after the user login

import React from "react";
import TextFields from "../components/Login"
import Grid from "../components/Grid"
import OutlinedTextFieldsLogin from "../components/Login";
import OutlinedButtons from "../components/-Edited-Signup";
// class Login extends Component {

// }

function Login() {
    return (
      <div>
        <Grid >
          <h1 >Login!</h1>
            <OutlinedTextFieldsLogin>
            </OutlinedTextFieldsLogin>
        </Grid>
      </div>
    );
  }
  
  export default Login;