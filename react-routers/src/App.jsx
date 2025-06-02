import { useState } from 'react'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
       <h1>hello world</h1>
    </>
  )
}

export default App
