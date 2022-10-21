import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = () => {

    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count+1)
    }
    const decrementar = () => {
        if(count > 0) setCount(count-1)
    }

    return (
        <div className='containerCount'>
        <div className='containerCountBtn'>
            <button className='btn btnIncrDec' onClick={decrementar}>-</button>
            <span>{count}</span>
            <button  className='btn btnIncrDec'  onClick={incrementar}>+</button>
        </div>
        <button  className='btn btnAgregarCarrito'>Agregar Carrito</button>
        
        </div>
    )
}