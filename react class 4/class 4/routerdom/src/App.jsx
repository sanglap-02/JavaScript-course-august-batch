import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Copmonents/Navbar'
import Footer from './Copmonents/Footer'
import Home from './Screens/Home'

import {Routes,Route} from 'react-router-dom'
import About from './Screens/About'
import Contact from './Screens/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>


    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
    </Routes>


    <Footer></Footer>
    </>
  )
}

export default App
