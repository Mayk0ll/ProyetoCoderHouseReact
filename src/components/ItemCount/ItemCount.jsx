import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const incrementar = () => {
        if(count < stock) setCount(count+1)
    }
    const decrementar = () => {
        if(count > 1) setCount(count-1)
    }

    return (
        <div className='containerCount'>
        <div className='containerCountBtn'>
            <button className='btn btnIncrDec' onClick={decrementar}>-</button>
            <span>{count}</span>
            <button  className='btn btnIncrDec'  onClick={incrementar}>+</button>
        </div>
        <button  className='btn btnAgregarCarrito' onClick={()=>onAdd(count)}>Agregar Carrito</button>
        
        </div>
    )
}