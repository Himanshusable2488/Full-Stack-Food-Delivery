import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

import Cart from './pages/Cart/Cart.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopUP from './components/LoginPopUp/LoginPopUP.jsx'




const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUP setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App