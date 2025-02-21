import react from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import CardsGrid from './components/CardGrid'

function App() {
  return (
    <>
      <div>
        <Navbar label='METEORA'/>

        <Carousel />

        <h2 class="text-center my-4" >Busque por categoria :</h2>

        <CardsGrid />

        <h2 class="text-center my-4">Produtos que estão bombando!</h2>
      </div>
    </>
  )
}

export default App
