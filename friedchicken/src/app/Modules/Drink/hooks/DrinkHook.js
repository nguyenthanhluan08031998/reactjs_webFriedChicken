import { useState, useEffect } from 'react'
import * as api from '../services/DrinkAPI'
export const useItem = (props) => {
    const [data, setData] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    async function getData() {
        let result = await api.getAllDrink();
        if (result) {
            setData(result)
        }
        setIsLoad(false)
    }
    useEffect(() => {
        getData()
    }, [])
    const onAddProductIntCart = () => {

    }
    return {
        data,
        isLoad,
        onAddProductIntCart
    }
}