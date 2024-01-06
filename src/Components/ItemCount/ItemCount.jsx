import { useState } from 'react'

const ItemCount = () => {

    const [count, setCount] = useState()
    console.log(count)

    const decrement = () => {
        if(count > 1)
            setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={() => setCount(0)}>Reiniciar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount