import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Address from './Components/Address.jsx'
import Phone from './Components/Phone.jsx'


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<App />}>
    <Route path='/' element={<Home></Home>} />
    <Route path='about' element={<About></About>} />
    <Route path='contact' element={<Contact></Contact>}>
      <Route path='address' element={<Address></Address>} />
      <Route path='phone' element={<Phone></Phone>} />
    </Route>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
