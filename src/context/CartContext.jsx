import { useState, createContext } from 'react'

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    isInCart: () => {}
   })

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.error("El producto ya esta agregado")
        }

    }

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}