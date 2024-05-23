import React  from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import "../Login.css"

const Signup = () => {
  const navigate = useNavigate()
  const [inputval, setInputval] = useState({name: "", email: "", password: "", Cpassword: ""})
 

  const [data,setData] = useState([]);
  console.log(inputval);

  const handlechange = (e) => {
      // console.log(e.target.value);

      const { value, name } = e.target;
      // console.log(value,name);


      setInputval(() => {
          return {
              ...inputval,
              [name]: value
          }
      })

  }

  const handleclick = (e) => {
      e.preventDefault();

      const { name, email, password } = inputval;

      if (name === "") {
          alert.error(' name field is requred!',{
              position: "top-center",
          });
      } else if (email === "") {
           alert.error('email field is requred',{
              position: "top-center",
          });
      } else if (!email.includes("@")) {
           alert.error('plz enter valid email addres',{
              position: "top-center",
          });
      } else if (password === "") {
           alert.error('password field is requred',{
              position: "top-center",
          });
      } else if (password.length < 5) {
           alert.error('password length greater five',{
              position: "top-center",
          });
      } else {
          console.log("data added succesfully");
          navigate("/login")
          localStorage.setItem("userdata1",JSON.stringify([...data,inputval]));

      }

  }

  return (
    <>

{/* <!-- Main Content --> */}
<div className="ms-4 mt-5 d-flex justify-content-center">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Your Company Logo</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row my-4">
						<h2>Sign Up</h2>
					</div>
					<div className="row">
						<form control="" className="form-group">
            <div className="row my-4">
								<input type="text" className="form-control" placeholder="Enter your Name" name="name" onChange={handlechange}/>
							</div>
          
							<div className="row my-4">
								<input type="text"  className="form-control" placeholder="Enter your Email" name="email" onChange={handlechange}/>
							</div>
         
							<div className="row my-4">
								{/* <!-- <span class="fa fa-lock"></span> --> */}
								<input type="password" className="form-control" placeholder="Password" name="password" onChange={handlechange} />
							</div>
         
              <div className="row my-4">
								{/* <!-- <span class="fa fa-lock"></span> --> */}
								<input type="password" className="form-control" placeholder="Confirm Password" name="Cpassword" onChange={handlechange} />
							</div>
         
							{/* <div className="row">
								<input type="checkbox" name="remember_me" id="remember_me" class="" />
								<label for="remember_me">Remember Me!</label>
							</div> */}
							<div className="row">
              <button className='btn btn-secondary' onClick={handleclick}>Submit</button>
							</div>
						</form>

					</div>
		
				</div>
			</div>
		</div>
    {/* <ToastContainer /> */}
	</div>
 </>
);
}

export default Signup
