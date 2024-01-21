import { getDocs, collection, QuerySnapshot, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { createProductsAdaptedFromFirestore } from "../../../adaptes/createProductsAdaptedFromFirestore"

export const getProducts = (categoryId) => {
    const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        return getDocs(collectionRef)
            .then(querySnapshot => {
                console.log(querySnapshot) 

                const productsAdapted = querySnapshot.docs.map(doc => {
                    return createProductsAdaptedFromFirestore(doc)
                })

                return productsAdapted
            })
            .catch(() => {
                return 'Hubo un error'
            })
}