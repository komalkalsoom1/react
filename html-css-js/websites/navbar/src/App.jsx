

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'

const App = () => {
  return (
    <>
    <Navbar/>
    <MobileNav/>
     <Outlet/>
    </>
  )
}

export default App
