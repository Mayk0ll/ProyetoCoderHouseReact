import React from 'react'
import './item.css'
import { Link, NavLink } from "react-router-dom";

export const Item = ({product}) => {
    return (
        <NavLink to={`/detail/${product.id}`} className="textDecoration">
        <div className='card'>
            <img src={product.image} alt="error" className='cardImage'/>
            <div className='cardInfo'>
                <p className='itemInfo'>{product.name}</p>
                <p className='itemInfo'>{product.price}$</p>
            </div>
        </div>
        </NavLink>
    )
}
