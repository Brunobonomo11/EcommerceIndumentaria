import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../notification/NotificationService"

const InputCount = ({onAdd, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock ) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({onAdd, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
            setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, name, category, img, stock, price, description}) => {
    const [inputType, setInputType] = useState('button')
    const [quantity, setQuantity] = useState(0)

    const {isInCart} = useCart()

    const {showNotification} = useNotification()
    

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (count) => {
        const objProducToadd = {
            id, name, price, count
        }
        console.log(objProducToadd) 
        showNotification('success', `Se agrego correctamente ${name}`)

    }


    return (
        <article>
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>
            <footer>
                {
                    !isInCart(id) ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <button>Finalizar Compra</button> 
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail