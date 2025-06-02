import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
function App() {
  
  return (
    <>
     <Card username = "Nishant"/> <br />
     <Card username ="Santi"/><br />
     <Card username ="Sintu"/><br />
     <Card />
    </>
  )
}

export default App
