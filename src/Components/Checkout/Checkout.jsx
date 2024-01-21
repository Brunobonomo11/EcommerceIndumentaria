import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { db } from "../../Services/firebase/firebaseConfig"
import {addDoc, getDocs, collection, query, where, documentId, writeBatch} from 'firebase/firestore'

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const [orderId, setOrderId] = useState(null)
    const {cart, total} = useCart()

    const createOrder = async (userData) => {
        setLoading(true)
        const objOrder = {
            buyer: {
                name: 'Bruno Bonomo',
                phone: '1234567890',
                email: 'bruno.coderhouse@gmail.com'
            },
            items: cart,
            total
        }

        const batch = writeBatch(db)
        const outOfstock = []

        const ids = cart.map(prod => prod.id)

        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

        // getDocs(productsCollection).then(documentSnapshot => console.log(documentSnapshot))

         const {docs} = await getDocs(productsCollection)

         docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedTocart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedTocart?.quantity

            if(stockDb => prodQuantity) {
                batch.update(doc.ref , {stock: stockDb - prodQuantity})
            } else {
                outOfstock.push({ id: doc.id, ...dataDoc})
            }
         })

         if(outOfstock.length === 0) {
            batch.commit()

            const ordersCollection = collection(db, 'orders')

            const {id} = await addDoc(ordersCollection, objOrder)
            setOrderId(id)
         }

         setLoading(false)
    }

    if(loading) {
        return <h1>Se está generando su número de orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout