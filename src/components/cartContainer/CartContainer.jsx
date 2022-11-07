import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartContainer = () => {

  const {productosCarritos} = useContext(CartContext)

  console.log('value', productosCarritos)
  return (
    <div>
      <p>pagina carrito</p>
      <div>
        {
          productosCarritos.map(producto => {
            return (<div>
              <h3>{producto.name}</h3>
              <p>{producto.price}</p>
              <p>{producto.quantity}</p>
            </div>)
          })
        }
      </div>
    </div>
  )
}
