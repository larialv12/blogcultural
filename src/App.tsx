import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Cards from './pages/Cards/Cards'
import Banner from './pages/Banner/Banner'
// import './App.css'

function App() {

  return (
    <>
      <Menu/>
      <Banner/>
      <Home/>
      <Cards/>

    </>
  )
}

export default App
