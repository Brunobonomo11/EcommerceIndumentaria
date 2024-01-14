import classes from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <nav className={classes.container} style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h1 onClick={() => navigate('/')} className={classes.negro}>Ecommerce Indumentaria</h1>
            <section className={classes.categories}>
                <Link to='/category/buzos' className={classes.boton}>Buzos</Link>
                <Link to='/category/remeras' className={classes.boton}>Remeras</Link>
                <Link to='/category/pantalones' className={classes.boton}>Pantalones</Link>
            </section>
            < CartWidget />
        </nav>
    )
}

export default Navbar