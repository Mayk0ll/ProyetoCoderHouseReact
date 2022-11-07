import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [productosCarritos, setProductosCarritos] = useState([]);

    const addProducts = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity
        }

        // setProductosCarritos([...productosCarritos, newProduct])
        const productosCarritosCopy = [...productosCarritos]
        productosCarritosCopy.push(newProduct);
        setProductosCarritos(productosCarritosCopy)
    }

    return (
        <CartContext.Provider value={{ productosCarritos, addProducts }}>
            {children}
        </CartContext.Provider>
    )
}
