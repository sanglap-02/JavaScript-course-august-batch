import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'

import {Outlet}from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
