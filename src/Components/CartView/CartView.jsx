import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {

    const {cart, total, removeItem} = useCart()

    return (
        <>
            <h1>CARRITO</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} style={{ display: 'flex', width: '100', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' , backgroundColor: '#F0ED77'}}>
                                <h2>{prod.name}</h2>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Precio: {prod.price}</h3>
                                <h3>Subtotal: ${prod.quantity * prod.price}</h3>
                                <button onClick={()=>{ removeItem(prod.id)}}>Eliminar Producto</button>
                            </div>
                        )
                    })
                }
            </div>
            <h1 style={{display: 'flex', width: '150', justifyContent: 'center', alignItems: 'center', backgroundColor: '#9BF283'}}>Total de la compra: ${total}</h1>
            <Link to='/checkout'>Checkout</Link>
        </>
    )
}

export default CartView