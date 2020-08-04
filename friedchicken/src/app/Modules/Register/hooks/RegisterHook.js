import { useState, useEffect } from "react";
import React from 'react';
import * as api from '../services/RegisterAPI';
var passwordHash = require('password-hash');
export const useItem = (props) => {
    const { history } = props;
    const [username, setUsername]= useState(null);
    const [password , setPassword] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [passwordAgain, setPasswordAgain] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPasswordAgain = () => {
        setPasswordAgain({ ...passwordAgain, showPassword: !passwordAgain.showPassword });
    };

    const handleMouseDownPasswordAgain = (event) => {
        event.preventDefault();
    };
    const onChangeUsername = (e) => {
        console.log('name',e.target.value)
        setUsername(e.target.value);
    }

    const onChangePassword = (prop) => (event) => {
        console.log('pw',event.target.value)
        setPassword({ ...password, [prop]: event.target.value });
    };
    const onChangePasswordAgain = (prop) => (event) => {
        console.log('pw',event.target.value)
        setPasswordAgain({ ...passwordAgain, [prop]: event.target.value });
    };
    const onRegister = async () => {
        if(password.password == passwordAgain.password && password.password && passwordAgain.password && username)
        {
            let user = api.makeNewItem;
            user.Username = username;
            user.Password = passwordHash.generate(password.password);
            console.log(user.Password)
            await api.register(user);
        }
        else{
            // thông báo nhập lại mật khẩu bị sai
            console.log('đăng nhập fail')
        }
    }
    return {
        password,
        passwordAgain,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleClickShowPasswordAgain,
        handleMouseDownPasswordAgain,
        onRegister,
        onChangeUsername,
        onChangePassword,
        onChangePasswordAgain,
    }
}