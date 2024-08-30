import { Outlet } from "react-router-dom"
import Navbar from "./Layout/Navbar/Navbar"
import Footer from "./Layout/Footer/Footer"


function App() {

  return (
    <>
    
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
