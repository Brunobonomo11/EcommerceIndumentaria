import { useCount } from "../../hooks/useCount"

const ItemCount = ({ initialValue, incrementBy}) => {

    const {count, decrement, increment} = useCount(initialValue, incrementBy)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={() => setCount(initialValue)}>Reiniciar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount