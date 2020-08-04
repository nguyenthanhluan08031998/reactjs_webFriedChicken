import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { logout } from "../../../../store/redux/auth/authActions";
import cookie from 'react-cookies';
import * as api from '../services/HeadBarAPI';

export const useItem = (props) => {
    const { history } = props;
    const [valueBottomNavigation, setBottomNavigation] = useState(0);
    const [openLogin, setOpenLogin] = useState(false)
    const [currentUser, setCurrentUser] = useState(null);
    const [openCartDetail, setOpenCartDetail] = useState(false);
    const [dataCart, setDataCart] = useState([]);
    const [isLoad, setIsLoad] = useState(true)
    const getDataCart = async () => {
        let data = await api.getAllCartByIdUser(currentUser.Id);
        setDataCart(data);
        setIsLoad(false)
    }

    const onChangeBottomNavigation = (e, value) => {
        setBottomNavigation(value)
        if (value == "0") {
            history.replace(`/home`);
        }
        if (value == "1") {
            history.push(`/food`);
        }
        if (value == "2") {
            history.push(`/drink`);
        }
        if (value == "3") {
            history.push(`/store`);
        }
    }
    const onNextToPageLogin = () => {
        history.push(`/login`)
    }

    const checkInLogin = () => {
        if (cookie.load('isCheckLogin') == 'true') {
            setCurrentUser(cookie.load('userLogined'))
            setOpenLogin(true); // set button đăng nhập thành icon user vì người dùng đã đăng nhập
        }
        if (cookie.load('userLogined') == null) {
            setOpenLogin(false);
        }
    }
    useEffect(() => {
        checkInLogin()
    }, [cookie.load('isCheckLogin')])

    const onLogout = () => {
        setOpenLogin(false)
        cookie.save('isCheckLogin', 'false')
        cookie.save('userLogined', null)
    }
    const onManagerUser =()=>{// hàm quản lý tài khoản và đơn hàng của khách hàng
        history.replace(`/managercustomer`);
    }
    const onOpenCartDetail = () => {
        if (cookie.load('isCheckLogin') == 'true') {
            getDataCart()
            setOpenCartDetail(true)
        }
        else {
            history.push(`/login`)
        }
    }
    const onDeleteProductInCart = async (product) => {
        setIsLoad(true);
        console.log(product)
        await api.deleteProductInCart(product);
        getDataCart();  
    }
    const onContinueShopping = () => {
        setOpenCartDetail(false)
    }
    const onPay = () => {
        setOpenCartDetail(false)
    }
    return {
        valueBottomNavigation,
        onChangeBottomNavigation,
        onLogout,
        onManagerUser,
        onNextToPageLogin,
        openLogin,
        currentUser,
        onOpenCartDetail,
        openCartDetail,
        dataCart,
        onDeleteProductInCart,
        onContinueShopping,
        onPay,
        isLoad
    }
}