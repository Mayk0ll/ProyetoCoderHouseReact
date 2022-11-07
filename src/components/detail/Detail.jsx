import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { products } from '../../productos';
import { ItemCount } from '../ItemCount/ItemCount';
import './detail.css'

export const Detail = () => {
    
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const {addProducts} = useContext(CartContext);

    
    useEffect(()=>{
        setDetail(products.find(elem => elem.id === Number(id)))
    },[])

    const agregarProducto = quantity => {
        addProducts(detail, quantity)
    }

    return (
        <div className='containerDetail'>
            <div >
                <img className="imagen" src={detail.image} alt="" />
            </div>
            <div className="infoDetail">
                <div className="itemDetail">
                    <h3>Categoria:</h3> <h4>{detail.category}</h4>
                </div>
                <div className="itemDetail">
                    <h3>Nombre:</h3> <h4>{detail.name}</h4>
                </div>
                <div className="itemDetail">
                    <h3>Precio:</h3><h4>{detail.price}$</h4>
                </div>
                <div className="itemDetail">
                    <h3>Cantidad En Stock:</h3><h4>{detail.stock}</h4>
                </div>
                <br /><br />
                <h3>descripcion:</h3><h4><br />{detail.description}</h4>
                <div>
                    <ItemCount stock={detail.stock} initial={1} onAdd={agregarProducto}/>
                </div>
            </div>
            
        </div>
    )
}
