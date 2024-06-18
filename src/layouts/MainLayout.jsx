import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
const MainLayout = () => {
  return (
    <>
    <NavBar />
    <ToastContainer/>
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout