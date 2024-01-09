import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
                console.log('Hubo un error obteniendo los productos, intente nuevamente en unos minutos');
            })
    }, [productId])

    return (
        <>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer