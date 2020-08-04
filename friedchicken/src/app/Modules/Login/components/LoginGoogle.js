import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useItem } from '../hooks/LoginHook';
// or


const LoginGoogle = (props) => {
    const { history, componentClicked } = props;
    const { responseGoogle } = useItem({ history });
    return (
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            onClick={componentClicked}
        />
    )
}
export default LoginGoogle;