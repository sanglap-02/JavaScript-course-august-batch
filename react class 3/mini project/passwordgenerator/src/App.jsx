import { useState,useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password,setPassword]=useState("")
  const [lenght, setLength]=useState(9)
  const [isNumAllowed, setIsNumAllowed]=useState(false)
  const [isCharAllowed,setIsCharAllowed]=useState(false)


  const handleEvent=useCallback(()=>{
    const str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const res=""

    const len=str.length
    for (let i = 0; i < length; i++) {
      const index= Math.floor(Math.random()*len+1)    //Math.random() generates anumber from 0 to 1
      res+=str.charAt(index)
    }
    setPassword(res)

  },[lenght,isNumAllowed,isCharAllowed,setPassword])

  useEffect(()=>{
    handleEvent()
  },[lenght,isCharAllowed,isNumAllowed,setPassword])





  return (
    <>
    <h1>Password Generator </h1>
    <input
    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text" name="" id=""
    readOnly value={password}/>

    <input min={8} type="range" name="" id="" onChange={(e)=>{
      setLength(e.target.value)
    }}/>
    <label > Length : {lenght}</label>

    </>
  )
}

export default App
