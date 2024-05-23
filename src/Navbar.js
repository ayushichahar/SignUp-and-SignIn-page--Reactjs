import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <div className ="container-fluid bg-light shadow py-2">
        <div className="d-flex justify-content-around">
       
         <Link to="/Project1" >Project1</Link>

        </div>
        </div>
        

        </>
    )
}

export default Navbar