import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './animations'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Portfolio />  
        <Carousel />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
