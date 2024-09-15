import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount]=useState(15)

  


  return (
    <>
    <h1 className='mb-4'>My Counter</h1>

    <button className='w-100 mr-4' onClick={()=>{
      setCount(count+1)
    }}>+</button>
    <span className='mr-4'>{count}</span>

    <button onClick={()=>{
      setCount(count-1)
    }}>-</button>
    </>
  )
}

export default App
