import React from 'react'
import './item.css'
import { Link } from "react-router-dom";

export const Item = ({product}) => {
    return (
        <Link to={`/detail/${product.id}`}>
        <div className='card'>
            <img src={product.image} alt="error" className='cardImage'/>
            <div className='cardInfo'>
                <p className=''>{product.name}</p>
                <p className=''>{product.price}$</p>
            </div>
        </div>
        </Link>
    )
}
