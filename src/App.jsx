import react from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
import Products from './components/Products'

function App() {
  return (
    <>
      <div>
        <Navbar label='METEORA'/>

        <Carousel />

        <h2 class="text-center" >Busque por categoria :</h2>

        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

        <h2 class="text-center">Produtos que estão bombando!</h2>

        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>

      <Products />
    </>
  )
}

export default App
