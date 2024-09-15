import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const url1="https://images.unsplash.com/photo-1725695788329-1a609af281f1?q=80&w=368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const url2="https://images.unsplash.com/photo-1725582205921-7d681ebca2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  

  return (
    <>
    <h1 className='main-text'>My Team</h1>
    <Card name="sanglap" description="whatever" url={url1} ></Card>

    

    <Card name="akash" description="whatever 2" url={url2}></Card>
    

    </>
  )
}

export default App
