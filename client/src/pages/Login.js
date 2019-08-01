// this is the main dashbaord after the user login

import React from "react";
import TextFields from "../components/Login"
import Grid from "../components/Grid"
import OutlinedTextFieldsLogin from "../components/Login";
import OutlinedButtons from "../components/RegisterBtn";
// class Login extends Component {

// }

function Login() {
    return (
      <div>
        <Grid>
            <OutlinedTextFieldsLogin>
            </OutlinedTextFieldsLogin>
        </Grid>
      </div>
    );
  }
  
  export default Login;