import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { useItem } from '../hooks/LoginHook';
const LoginFacebook = (props) => {
    const {history, componentClicked} = props;
    const {responseFacebook} = useItem({history});
    return ( 
        <FacebookLogin
            appId="597399907574024"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
    )
}
export default LoginFacebook;