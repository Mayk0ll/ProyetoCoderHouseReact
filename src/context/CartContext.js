import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [productosCarritos, setProductosCarritos] = useState([]);

    const isInCart = id => {
        const productInCart = productosCarritos.some(producto => producto.id === id)
        return productInCart
    }

    const addProducts = (item, quantity) => {
        
        const productosCarritosCopy = [...productosCarritos]
        if(isInCart(item.id)){
            const posProduct = productosCarritos.findIndex(product => product.id === item.id);
            productosCarritosCopy[posProduct].quantity += quantity;
            productosCarritosCopy[posProduct].quantityPrice = productosCarritosCopy[posProduct].quantity * item.price;
            setProductosCarritos(productosCarritosCopy);
        } else {
            const newProduct = {
                ...item,
                quantity,
                quantityPrice: quantity * item.price
            }
            productosCarritosCopy.push(newProduct);
            setProductosCarritos(productosCarritosCopy);
            // setProductosCarritos([...productosCarritos, newProduct])
        }
    }

    const clear = () => {
        setProductosCarritos([])
    }

    const getTotalPrice = () => {
        const precioTotal = productosCarritos.reduce((acc, curr) =>  acc += curr.quantityPrice, 0);
        return precioTotal
    }
    
    const getTotalProduct = () => {
        const totalProducts = productosCarritos.reduce((acc, curr) =>  acc += curr.quantity, 0);
        return totalProducts
    }

    const removeProduct = id => {
        const newProducts = productosCarritos.filter(product => product.id !== id)
        setProductosCarritos(newProducts)
    }


    return (
        <CartContext.Provider value={{ productosCarritos, addProducts, getTotalPrice, getTotalProduct, removeProduct, clear }}>
            {children}
        </CartContext.Provider>
    )
}
