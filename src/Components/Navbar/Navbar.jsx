import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.container} style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h1 className={classes.negro}>Ecommerce Indumentaria</h1>
            <section className={classes.categories}>
                <button className={classes.boton}>Buzos</button>
                <button className={classes.boton}>Remeras</button>
                <button className={classes.boton}>Pantalones</button>
            </section>
        </nav>
    )
}

export default Navbar