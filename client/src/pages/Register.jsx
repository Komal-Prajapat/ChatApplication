import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Register = () => {
const [values, setvalues] = useState({
  name: "",
  email : "",
  password : "",
  confirmPassword : ""
})

  const handlSubmit = (event) => {
    event.preventDefault();
    // alert("form");
    handleValidation();
    // console.log("Register")

  };

  const handleValidation = () => {
    const { password, confirmPassword, name, email } = values;
    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be the same", {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
    } else if (name.length < 2) {
      toast.error("name should be greater than 2 characters", {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
    }
    else if (password.length < 3 ) {
      toast.error("password value greater then 3 ", {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
    }  
    else {
      toast.success("Welcome", {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
    }
  };
  
  const handleChange=(event)=>{
      setvalues({...values,[event.target.name]:event.target.value})
  }

  return (
    <div className="container">
      <form onSubmit={(event) => handlSubmit(event)} className="formcontainer">
        <div className="brand">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.lT-53Ey-CkG-_robqmhoxgHaHa&pid=Api&P=0&h=180"
            style={{width:"50px"}}
            alt="img"
          />
          <h1>Snappy</h1>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="EmailId"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>Already have an account? <Link to={"/login"}>Login.</Link></span>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
