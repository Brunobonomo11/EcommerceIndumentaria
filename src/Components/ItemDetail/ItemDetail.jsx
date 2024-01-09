import { useState, useContext } from "react"
import { Context } from "../../App"

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

    const {addItem, isInCart} = useContext(Context)
    

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (count) => {
        const objProducToadd = {
            id, name, price, count
        }
        addItem(objProducToadd)
        console.log('agregue al carrito: ', count)

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