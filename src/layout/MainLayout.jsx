import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet, ScrollRestoration } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
     <ScrollRestoration />
     <Navbar />
     <Outlet />
     <Footer />
    </>
  )
}

export default MainLayout;