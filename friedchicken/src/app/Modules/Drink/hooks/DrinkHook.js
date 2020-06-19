import { useState, useEffect } from 'react'
import * as api from '../services/DrinkAPI'
export const useItem = (props) => {
    const [data, setData] = useState([])
    async function getData() {
        let result = await api.getAllDrink();
        if (result) {
            setData(result)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return {
        data
    }
}