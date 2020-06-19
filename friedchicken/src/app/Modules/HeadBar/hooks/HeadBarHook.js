import React from 'react';
import { useState, useEffect } from 'react'
export const useItem = (props) => {
    const { history } = props;
    const [valueBottomNavigation, setBottomNavigation] = useState(0);
    const  onChangeBottomNavigation = (e, value) =>{
        setBottomNavigation(value)
        if(value=="0"){
            history.replace(`/home`);
            console.log(history)
        }
        if(value=="1"){
            history.push(`/food`);
        }
        if(value=="2"){
            history.push(`/drink`);
        }
        if(value=="3"){
            history.push(`/store`);
        }
    }
    const onLogin = () =>{
        history.push(`/login`)
    }
    return{
        valueBottomNavigation,
        onChangeBottomNavigation,
        onLogin
    }
}