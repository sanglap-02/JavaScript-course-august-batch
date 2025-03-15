import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount]=useState(20)

  // let count=0;

  function increase(){
    setCount(count+1);
    console.log(count);
  }

  function decrease(){
    setCount(count-1);
    console.log(count);
  }
  


  return (
    <>
    <h1 className='mb-4'>My Counter</h1>

    <button className='w-100 mr-4' onClick={()=>{
      increase()
    }}>+</button>
    <span className='mr-4'>{count}</span>

    <button onClick={()=>{
      decrease()
    }}>-</button>
    </>
  )
}

export default App
