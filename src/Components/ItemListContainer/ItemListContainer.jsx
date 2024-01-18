import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../Services/firebase/firestore/products"


const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            }).catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            }) 

        // setLoading(true)

        // const asyncFuntion = categoryId ? getProductsByCategory : getProducts

        // asyncFuntion(categoryId)
        //     .then(response => {
        //         setProducts(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [categoryId])
    console.log(products) 

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer