import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc} from "firebase/firestore";
import {db} from '../../utils/firebase/firebase'

export const CartContainer = () => {

  const {productosCarritos, getTotalPrice, removeProduct, clear} = useContext(CartContext)

  const sendOrder = (e) => {
    e.preventDefault();
    const order = { buyer: { name:e.target[0].value, phone: e.target[1].value, email: e.target[2].value }, items: productosCarritos, total: getTotalPrice()}
    console.log(order)

    const queryRef = collection(db, 'ordenes');
    const resp = addDoc(queryRef, order).then(result => console.log(result))
    // const resp = await addDoc(queryRef, order)
  }

  return (
    <div>
      <p>pagina carrito</p>
      {}
      {
        productosCarritos.length > 0?<>
        <div>
        {
          productosCarritos.map(producto => {
            return (
            <div key={producto.id}>
              <h3>{producto.name}</h3>
              <p>{producto.price}</p>
              <p>{producto.quantity}</p>
              <p>total {producto.quantityPrice}</p>
              <button onClick={()=>removeProduct(producto.id)}> Eliminar </button>
            </div>)
          })
        }
        <p><strong>Precio Total: {getTotalPrice()}</strong></p>
        <button onClick={clear}>
          <h2>limpiar todos los proudctos</h2>
        </button>
        <form onSubmit={sendOrder}>
          <label htmlFor="nombre">nombre</label>
          <input type="text" placeholder='nombre' id='nombre'/>
          <label htmlFor="telefono">telefono</label>
          <input type="text" placeholder='telefono' id='telefono'/>
          <label htmlFor="correo">correo</label>
          <input type="email" placeholder='correo' id='correo'/>
          <button type='submit'>enviar Orden</button>
        </form>
      </div>
      </>:<>
        <h1>Aun no tienes nada en el carrito</h1>
      </>
      }
    </div>
  )
}
