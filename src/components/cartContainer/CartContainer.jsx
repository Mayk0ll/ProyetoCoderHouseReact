import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartContainer = () => {

  const {productosCarritos, getTotalPrice, removeProduct, clear} = useContext(CartContext)

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
      </div>
      </>:<>
        <h1>Aun no tienes nada en el carrito</h1>
      </>
      }
    </div>
  )
}
