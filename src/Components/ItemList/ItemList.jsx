import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'goldenrod', margin: '10'}}>
            {
                products.map(product => {
                    return (
                        <Item  key={product.id} {...product}/>
                    )
                })
            }
            </div>
        </>
    )
}

export default ItemList