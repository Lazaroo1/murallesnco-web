import Contacto from './components/Contacto'
import Empresas from './components/Empresas'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Nosotros from './components/Nosotros'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Empresas />
        <Contacto />
      </main>
    </>
  )
}

export default App
