import { useState, createContext, useContext } from 'react'

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

    const getItem = (productId) => {

    }

    const removeItem = (productId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let accu = 0
 
        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, getItem, removeItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}