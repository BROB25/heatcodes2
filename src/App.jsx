import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

import Contact from './components/Contact'
import Footer from './components/Footer'
import './animations'
import Carousel2 from './components/Carousel2'


function App() {
  const [count, setCount] = useState(0)
  const bodyStyle = { overflowX: 'hidden' };

  return (
    <>
      <div style={bodyStyle}>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Carousel2 />  

        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
