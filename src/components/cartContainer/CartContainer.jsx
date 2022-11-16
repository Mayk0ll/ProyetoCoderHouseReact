import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc} from "firebase/firestore";
import {db} from '../../utils/firebase/firebase'
import { useState } from 'react';
import './CartContainer.css'
import { Link } from 'react-router-dom';

export const CartContainer = () => {

  const [ordenCreada, setOrdenCreada] = useState({estado: false, id:''});

  const {productosCarritos, getTotalPrice, removeProduct, clear} = useContext(CartContext)

  const sendOrder = (e) => {
    e.preventDefault();
    const order = { buyer: { name:e.target[0].value, phone: e.target[1].value, email: e.target[2].value }, date: Date(),items: productosCarritos, total: getTotalPrice()}
    console.log(order)

    const queryRef = collection(db, 'ordenes');
    const resp = addDoc(queryRef, order).then(result => setOrdenCreada({estado: true, id:result.id}))
    // const resp = await addDoc(queryRef, order)
  }

  return (
    <div className='containerCart'>
      {ordenCreada.estado&& <p><strong>se a creado la orden {ordenCreada.id} </strong></p> }
      {
        productosCarritos.length > 0?<>
        <div>
        {
          productosCarritos.map(producto => {
            return (
            <div key={producto.id} className='cardCart'>
              <h3>{producto.name}</h3>
              <p>{producto.price}</p>
              <p>{producto.quantity}</p>
              <p>total {producto.quantityPrice}</p>
              <button onClick={()=>removeProduct(producto.id)}> Eliminar </button>
            </div>)
          })
        }
        <div className='containerCartInfo'>
        <p><strong>Precio Total: {getTotalPrice()}</strong></p>
        <div>
          <button onClick={clear} className='btnCartClean'>Limpiar todos los productos</button>
        </div>
          <form onSubmit={sendOrder}>
            <div  className='formCart'>
              <div className='ItemInfo'>
                <label htmlFor="nombre">nombre</label>
                <input type="text" placeholder='nombre' id='nombre'/>
              </div>
              <div className='ItemInfo'>
                <label htmlFor="telefono">telefono</label>
                <input type="text" placeholder='telefono' id='telefono'/>
              </div>
              <div className='ItemInfo'>
                <label htmlFor="correo">correo</label>
                <input type="email" placeholder='correo' id='correo'/>
              </div>
            </div>
            <button type='submit' className='btnCartClean'>Enviar Orden</button>
          </form>
        </div>
      </div>
          
      </>:<>
        <h1>Aun no tienes nada en el carrito</h1>
        <Link to={'/'}><h2>IR AL INICIO</h2></Link>

      </>
      }
    </div>
  )
}
