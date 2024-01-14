import carritoImg from './assets/bx-cart-add.svg'

const CartWidget = () => {
    return (
        <button>
            <img src={carritoImg} />
            0
        </button>
    )
}

export default CartWidget