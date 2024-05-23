import React from "react";
import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate();
    const UserName = JSON.parse(localStorage.getItem("userdata1"))
    const logout=()=>{
        localStorage.removeItem("user-email")
       navigate("/Login")
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        navigate("/")
    }
    
    return(
        <div>
            <h1 className="text-center" >Home Page </h1>
            <p className="text-center">Welcome {UserName.name}</p>
            <div className="d-flex justify-content-around">
            <div className="btn btn-success">
            <button onClick={logout} className="text-center">LogOut</button>
            </div>
            <div className="btn btn-danger">
            <button onClick={deleteAccount} className="delete">Delete</button>
            </div>
            </div>
            
        </div>
    );
}
export default Home;