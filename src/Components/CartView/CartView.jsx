import { useCart } from "../../context/CartContext"

const CartView = () => {

    const {cart} = useCart()

    return (
        <>
            <h1>CARRITO</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h2>{prod.name}</h2>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Precio: {prod.price}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CartView