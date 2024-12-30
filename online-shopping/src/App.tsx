import { Route, Routes } from "react-router-dom"
import Store from "./pages/store/Store"
import Home from "./pages/home/Home"
import Navbar from "./comopnents/navbar/Navbar"

function App() {

  return (
    <> 
    <Navbar />
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/store" element = {<Store/>} />
   
   </Routes>
   </>
  )
}

export default App
