

import Footer from './Components/Footer'
import Navbar from './Components/Navbar'


import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
    <Navbar />

    <Card text="this is some text"/>

    <Card text="this is another text"/>
    <Footer/>

    <div className="red">
      hello how are you 
    </div>
    </>
  )
}

export default App
