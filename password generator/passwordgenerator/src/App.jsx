import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length, setLength]=useState(8)
  const[numAllowed, setNumAllowed]=useState(false)
  const[charAllowed, setCharAllowed]=useState(false)
  const[password, setPassword]=useState("")
  const[password1, setPassword1]=useState("")
  const[password2, setPassword2]=useState("")


  const handleChaneg=useCallback(()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num="1234567890"
    const charAl="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    console.log(charAllowed);

    if(numAllowed){
      str+=num
    }
    if(charAllowed){
      str+=charAl
    }
    console.log(str);
    let res=""
    for (let i = 0; i <length; i++) {
      const ind=Math.floor(Math.random()*length+1)
      res+=str.charAt(ind)
    }
    setPassword(res)

  },[length,numAllowed,charAllowed])

  useEffect(()=>{
    handleChaneg()
  },[length,numAllowed,charAllowed,setPassword])


  return (
   <>
    <h1 className='mb-10'>Password Generator</h1>
    <input 
    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    value={password} 
    readOnly
    />
    <input 
    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    value={password1} 
    readOnly
    />
    <input 
    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    value={password2} 
    readOnly
    />
    <button className='mt-4'
      onClick={()=>{
        window.navigator.clipboard.writeText(password)
      }}
    >Copy</button>
    <div className="felx mt-10 ">
      <input className='mr-3' type="range" 
      min={10}
      max={100}
      onChange={(e)=>{
        setLength(e.target.value)
      }}
       />
       <label>Lenght : {length}</label>

       ,     <input 
       type="checkbox"
       onChange={()=>{
        setCharAllowed(!charAllowed)
       }}/>
       <label >Character Allowed   </label>

       <input className='ml-4' type="checkbox" name="" id=""
       onChange={()=>{
        setNumAllowed(!numAllowed)
       }} />
       <label >Number allowed</label>
    </div>
   </>
  )
}

export default App
