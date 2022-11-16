import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";

export const ItemListContainer = ({greeting}) => {

  const {categoryName} = useParams()

  const [allProducts, setAllProducts] = useState([]);
  
  useEffect(()=>{
    obtenerproductos()
  },[categoryName])

  const obtenerproductos = async() => {
    if(categoryName){
      const queryRef = query(collection(db, 'productos'), where('category','==',categoryName));
      const resp = await getDocs(queryRef)
      setAllProducts(generateObjects(resp))
    }
    else {
      const queryRef = collection(db, 'productos');
      const resp = await getDocs(queryRef)
      setAllProducts(generateObjects(resp))
    }
  }

  const generateObjects = products =>{
    return products.docs.map(product => ({ id: product.id, ...product.data()}))
  }

  return (
    <>
      <ItemList products={allProducts}/> 
    </>
  )
}