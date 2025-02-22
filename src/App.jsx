import react from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import CardsGrid from './components/CardGrid'
import Produtos from './components/Products'

function App() {
  return (
    <>
      <div>
        <Navbar label='METEORA'/>

        <Carousel />

        <h2 class="text-center my-4" >Busque por categoria :</h2>

        <CardsGrid />

        <h2 class="text-center my-4 mb-5">Produtos que estão bombando!</h2>

        <Produtos />
      </div>
    </>
  )
}

export default App
