import { useState, useEffect } from "react";
import React from 'react';
import * as api from '../services/LoginAPI';
import { ClickAwayListener } from "@material-ui/core";
import UserLogin from "../../HeadBar/components/UserLogin";
import cookie from 'react-cookies';

var passwordHash = require('password-hash');

export const useItem = (props) => {
    const { history } = props;
    const userLoigned = api.makeNewItem;
    const [userLogined, setUserLogined] = useState(api.makeNewItem); // tài khoản mà người dùng đã đăng nhâpp
    const [passwordLogin, setPasswordLogin] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [usernameLogin, setUsernameLogin] = useState('');
    const onLogin = async () => {
        let user = await api.getUserByUsername(usernameLogin)
        if (user) {
            if (passwordHash.verify(passwordLogin.password, user.Password)) {
                cookie.save('userLogined', user);
                cookie.save('isCheckLogin', 'true');
                history.replace(`/home`)
            }
            else {
                //password sai
            }
        }
        else {

            //database khong co user nay
        }

    }
    const responseFacebook = (response) => {
        if (response) {
            userLoigned.Username = response.name;
            userLogined.Image = response.picture.data.url;
            cookie.save('userLogined', userLogined);
            cookie.save('isCheckLogin', 'true');
            history.replace(`/home`)
        }

    }
    const responseGoogle = (response) => {
        if (response) {
            console.log(response)
            userLoigned.Username = response.name;
            userLogined.Image = response.picture.data.url;
            cookie.save('userLogined', userLogined);
            cookie.save('isCheckLogin', 'true');
            history.replace(`/home`)
        }

    }
    const onRegister = () => {
        history.replace(`/Register`)
    }
    const onLoginFacebook = () => {
        history.replace(`/login/facebook`)
    }
    const onLoginGoogle = () => {
        history.replace(`/login/google`)
    }


    const handleChange = (prop) => (event) => {
        setPasswordLogin({ ...passwordLogin, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPasswordLogin({ ...passwordLogin, showPassword: !passwordLogin.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const onChangeUsername = (event) => {
        setUsernameLogin(event.target.value)
    }
    return {
        onLogin,
        onRegister,
        onLoginFacebook,
        onLoginGoogle,
        responseFacebook,
        responseGoogle,
        passwordLogin,
        handleChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        onChangeUsername
    }
}