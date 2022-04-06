import React, { createContext, useState , useReducer } from 'react'
import './cart.css';
import {reducer} from './reducer'
import Products from './Product'
import App from './Contextcart';


export const contextApp = createContext();

const Cart = () => {

    // const [state, setState] = useState({Products})
    const initialValue = {
        items : Products,
        totalItems : 0,
        totalAmount : 0
    }

    const [state, dispatch] = useReducer(reducer, initialValue)

    const removeItem =(id) => {
       return dispatch({
            type : 'REMOVE',
            payload: id,
        })
    }

    const clearCart = ()=> {
        return dispatch({
            type : 'CLEARITEMS'
        })
    }

    const increment = (id) => {
        return dispatch({
            type : 'INCR',
            payload :id 
        })
    }

    const decrement = (id) => {
        return dispatch ({
            type : 'DECR',
            payload : id
        })
    }

    return (
        <>
            <contextApp.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
                <App />
            </contextApp.Provider>

        </>
    )
}

export default Cart