import Navbar from './Components/Navbar/Navbar'
import Button from './Components/Button/Button'
import ItemCount from './Components/ItemCount/ItemCount'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react'

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
      document.title = `Vite + React`
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

function App() {

  return (
    <>
      <div>
      <Navbar />
      </div>
      <ItemListContainer greeting={'Bienvenidos al mejor Ecommerce de Indumentaria'}/>
      <h1>Ecommerce Indumentaria</h1>
      <Button text={'Buzos'} color={'black'} callback={() => console.log('Click en Buzos')}/>
      <Button text={'Remeras'} color={'black'} callback={() => console.log('Click en Remeras')}/>
      <Button text={'Pantalones'} color={'black'} callback={() => console.log('Click en Pantalones')}/>
      <ItemCount />
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
      <OfertaLimitada />
      
    </>
  )
}

export default App
