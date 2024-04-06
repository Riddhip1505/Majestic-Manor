import React, { useState } from "react";
import loginSignupImage from "../food/login-animation.gif";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

const userData = useSelector(state=>state)


const dispatch = useDispatch()

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  //console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataRes = await fetchData.json();
      //console.log(dataRes);
      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes))
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      //console.log(userData)
    } else {
      alert("Please enter the necessary(*) fields...!");
    }
  };
  return (
    <div className="p-4 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-2">
        {/*<h1 className='text-center text-1xl font-bold'>Sign up </h1>*/}
        <div className="w-20 overflow-hidden rounded-full drop-shoadow-md shadow-md">
          <img src={loginSignupImage} className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
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
          <button className="w-full max-w-[120px] m-auto bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-full text-white tezxt-xl py-1 text-center font-medium mt-4">
            Login
          </button>
        </form>
        <p className="text-sm mt-1">
          Don't have an account? Let's Create one!{"  "}
          <Link to={"/signup"} className="text-blue-800 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
