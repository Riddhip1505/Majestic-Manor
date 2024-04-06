import React, { useState } from "react";
import loginSignupImage from "../food/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import {ImagetoBase64} from  "../utility/ImagetoBase64";
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image : ""
  });
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };
  console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploAdProfileImage = async(e)=>{
      const data = await ImagetoBase64(e.target.files[0])
      console.log(data)

      setData((preve)=>{
        return{
          ...preve,
          image :data
        }
              })
  };
  //console.log('http://localhost:5000')
  const handleSubmit = async(e) => { 
    e.preventDefault();
    const { firstName, email, password, confirmpassword } = data;
    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,
          {
            method : "POST",  
            headers : {
              "content-type" : "application/json"
            }, 
            body : JSON.stringify(data)
          })
          const dataRes = await fetchData.json()
          console.log(dataRes)
        //alert(dataRes.message);
        toast(dataRes.message)
        if(dataRes.alert){
          
        navigate("/login");
        }
      } else {
        alert("password and confirmed password does not match!");
      }
    } else {
      alert("Please enter the necessary(*) fields...!");
    }
  };
  return (
    <div className="p-4 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-2">
        {/*<h1 className='text-center text-1xl font-bold'>Sign up </h1>*/}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shoadow-md shadow-md m-auto relative">
          <img src={data.image ? data.image :loginSignupImage} className="w-full h-full" />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploAdProfileImage}/>
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name *</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 py-1 px-2 rounded focus-within:outline-red-700"
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 py-1 px-2 rounded focus-within:outline-red-700"
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label htmlFor="email">E-mail*</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 py-1 px-2 rounded focus-within:outline-red-700"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password*</label>
          <input
            type={"password"}
            id="password"
            name="password"
            className="mt-1 mb-2 w-full bg-slate-200 py-1 px-2 rounded focus-within:outline-red-700"
            value={data.password}
            onChange={handleOnChange}
          />
          <label htmlFor="confirmpassword">Confirm Password*</label>
          <input
            type={"password"}
            id="confirmpassword"
            name="confirmpassword"
            className="mt-1 mb-2 w-full bg-slate-200 py-1 px-2 rounded focus-within:outline-red-700"
            value={data.confirmpassword}
            onChange={handleOnChange}
          />
          <button className="w-full max-w-[120px] m-auto bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-full text-white tezxt-xl py-1 text-center font-medium mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-1">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-800 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
} 

export default Signup;
