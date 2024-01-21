import { useEffect, useState } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc} from "firebase/firestore"
import { QueryDocumentSnapshot } from "firebase/firestore"
import { db } from "../../Services/firebase/firebaseConfig"
import { createProductsAdaptedFromFirestore } from "../../adaptes/createProductsAdaptedFromFirestore"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const documentRef = doc(db, 'products', productId)

        getDoc(documentRef)
            .then(queryDocumentSnapshot => {
                const productAdapted = createProductsAdaptedFromFirestore(queryDocumentSnapshot)
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

        // getProductById(productId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         console.log('Hubo un error obteniendo los productos, intente nuevamente en unos minutos');
        //     })
    }, [productId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer