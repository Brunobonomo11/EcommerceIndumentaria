import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return (
        <div>
                            <h2>{name}</h2>
                            <img src={img} style={{ width: 150 , borderRadius: 150}}/>
                            <h3 style={{ fontSize: 20}}>${price}</h3>
                            <Link to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
    )

}

export default Item