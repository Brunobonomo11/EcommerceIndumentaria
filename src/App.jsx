import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Button from './Components/Button/Button'
import MercadoLibre from './Components/Mercado Libre/MercadoLibre'
import FormWithValidationHOC from './Components/FormWithValidationHOC/FormWithValidationHOC'
import TaskFilterRenderProps from './Components/TaskFilterRenderProps/TaskFilterRenderProps'
import { CartProvider } from './context/CartContext'
import { NotificationProvider} from './Components/notification/NotificationService'


const Layout = (props) => {
  console.log(props)
  return (
    <div>
      <h1 style={{ color: props.color}}>{props.title}</h1>
      {props.children}
    </div>
  )
}

const OfertaLimitada = () => {
  const [vuelta, setVuelta] = useState(20)
  const [horas, setHoras] = useState(13)
  const [minutos, setMinutos] = useState(30)
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    document.title = `Vuelta:${vuelta}`

    return () => {
      document.title = `Ecommerce Indumentaria`
    }
  }, [vuelta])

  useEffect(() => {
    setSegundos(60)

    const intervalId = setInterval(() => {
      setSegundos(prev => prev - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [vuelta])

  useEffect (() => {
    if(segundos === 0) {
      setSegundos(0)
      setMinutos(prev => prev + 1)
    }
  }, {segundos})

  useEffect (() => {
    if(minutos === 0) {
      setMinutos(0)
      setHoras(prev => prev - 1)
    }
  }, {segundos})


  const finalizarVuelta = () => {
    setVuelta(prev => prev - 1)
  }

  return (
    <>
    <h1>Oferta de Tiempo Limitado</h1>
    <h2>Ultimas Unidades en Stock: {vuelta}</h2>
    <h2>Tiempo: {horas}hs:{minutos}m:{segundos}s</h2>
    <button onClick={finalizarVuelta}>Agregar al Carrito</button>
    </>
  )

}

const App = () => {
  
  return (
    <>
      <NotificationProvider>
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <div>
              <Link to='/'>
                Listado
              </Link>
              <Link to='/detail'>
                Detalle
              </Link>
            </div>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos al mejor Ecommerce de Indumentaria'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Filtrados'}/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>
            </Routes>
            <Button />
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
      <FormWithValidationHOC />
      <Layout title={'Sección temporada de Verano'} color='gold'>
        <p>Elegí el traje de baño o malla que mejor se adapte a vos</p>
      </Layout>
      <Layout title={'Sección temporada de Invierno'} color='dark'>
        <p>Elegí la campera o buzo que mejor se adapte a vos</p>
      </Layout>
      <Layout title={'Sección 2x1 Oferta de Temporada'} color='red'>
        <p>Agrega al carrito para iniciar una compra</p>
        <button>Comprar</button>
      </Layout>
      <TaskFilterRenderProps />
      <OfertaLimitada />
      <MercadoLibre />
      
    </>
  )
}

export default App
