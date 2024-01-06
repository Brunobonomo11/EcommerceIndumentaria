import Navbar from './Components/Navbar/Navbar'
import Button from './Components/Button/Button'
import ItemCount from './Components/ItemCount/ItemCount'

function App() {

  return (
    <>
      <div>
      <Navbar />
      </div>
      <h1>Ecommerce Indumentaria</h1>
      <Button text={'Buzos'} color={'black'} callback={() => console.log('Click en Buzos')}/>
      <Button text={'Remeras'} color={'gold'} callback={() => console.log('Click en Remeras')}/>
      <Button text={'Pantalones'} color={'blue'} callback={() => console.log('Click en Pantalones')}/>
      <ItemCount />
    </>
  )
}

export default App
