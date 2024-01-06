const products = [
    {
        id: '1',
        name: 'Buzo Estampado Futbol Oversize',
        price: 17600,
        category: 'buzos',
        img: 'https://acdn.mitiendanube.com/stores/001/987/365/products/whatsapp-image-2023-10-04-at-11-53-38-18d02bc47c0e050ed916964396717880-1024-1024.jpeg',
        stock: '25',
        description: 'Descripción Buzo Oversize'
    },
    {
        id: '2',
        name: 'Remera Estampado Rock 1990',
        price: 12600,
        category: 'remeras',
        img: 'https://http2.mlstatic.com/D_NQ_NP_748249-MLA72166394126_102023-O.webp',
        stock: '20',
        description: 'Descripción Remera Rock'
    },
    {
        id: '3',
        name: 'Pantalon Cargo Negro Oversize',
        price: 26500,
        category: 'pantalones',
        img: 'https://acdn.mitiendanube.com/stores/001/015/914/products/bclub11-e12dc76e00b566682016179053634854-1024-1024.jpg',
        stock: '20',
        description: 'Descripción Pantalon Cargo'
    }
]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}