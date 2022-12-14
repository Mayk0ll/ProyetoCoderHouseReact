import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { doc, getDoc} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import './detail.css'

export const Detail = () => {
    
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [botonCarrito, setbotonCarrito] = useState(false);
    const {addProducts} = useContext(CartContext);

    
    useEffect(()=>{
        getData();
    },[])

    const getData = async() => {
        const queryRef = doc(db,'productos',id)
        const resp = await getDoc(queryRef)
        setDetail({id: resp.id,  ...resp.data()})
    }

    const agregarProducto = quantity => {
        addProducts(detail, quantity)
        setbotonCarrito(true);
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
                {
                    botonCarrito&&<>
                    <Link to='/cart'>
                        <button className='btnAddCarrito'>ir al Carrito</button>
                    </Link>
                    </>
                }
                <div>
                    <ItemCount stock={detail.stock} initial={1} onAdd={agregarProducto}/>
                </div>
            </div>
            
        </div>
    )
}
