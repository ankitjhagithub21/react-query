import React from 'react'
import Header from '../ui/Header'
import {Outlet} from "react-router-dom"
import Footer from '../ui/Footer'
const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout