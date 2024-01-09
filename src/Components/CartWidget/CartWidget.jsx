import reactImg from './assets/react.svg'

const CartWidget = () => {
    const {totalQuantity} = useCart()

    return (
        <button>
            <img src={reactImg}/>
            0
            {totalQuantity}
        </button>
    )
}

export default CartWidget