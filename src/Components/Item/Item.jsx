import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return (
        <div>
                            <h2>{name}</h2>
                            <img src={img} style={{ width: 100 }}/>
                            <h3>${price}</h3>
                            <Link to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
    )

}

export default Item