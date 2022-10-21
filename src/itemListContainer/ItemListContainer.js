import React, { useEffect, useState } from 'react'
import {products} from '../productos.js';
import { ItemList } from '../itemList/ItemList.jsx'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {

  const {categoryName} = useParams()



  const obtenerproductos = () => {
    return new Promise((resolve,reject) => {
      let productos = []
      if(categoryName){
        productos = products.filter( cate => cate.category === categoryName)
      }
      setTimeout(() => {
        resolve(productos)
      }, 1000);
    })
  }

  const [allProducts, setAllProducts] = useState([]);

  
  useEffect(()=>{
    obtenerproductos().then(resp => setAllProducts(resp))
  },[categoryName])

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={allProducts}/> 
    </>
  )
}
