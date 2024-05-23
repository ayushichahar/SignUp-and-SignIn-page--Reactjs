import { Route, Routes } from "react-router-dom"
import "./App.css"
import Signup from "./components/Signup"
import Navbar from "./Navbar"
import Login from "./components/Login"
import Home from "./components/Home"

const App = () => {
    return (
        <>
  
        <Routes>
        
        <Route path="/" element={ <Signup/> }/>
        <Route path="/Login" element={ <Login/> }/>

        <Route path="/Home" element={ <Home/> }/>
        <Route path="/Navbar" element={ <Navbar/> }/>
        
        </Routes>
       
        </>
          )
        }    

export default App