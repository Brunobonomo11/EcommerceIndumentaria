import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
    }, [productId])

    return (
        <>
            <h1>Detalle de Producto</h1>
            <h2>{product?.name}</h2>
        </>
    )
}

export default ItemDetailContainer