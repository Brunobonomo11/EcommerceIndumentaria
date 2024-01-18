import carritoImg from './assets/bx-cart-add.svg'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <button>
            <img src={carritoImg} />
            {totalQuantity}
        </button>
    )
}

export default CartWidget