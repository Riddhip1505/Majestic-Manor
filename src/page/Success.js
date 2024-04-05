import React from "react";
import { useSelector } from "react-redux";
import payment from "../food/success.gif";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {initialState} from "../redux/productSlide"

const Success = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1600);
  toast("Order Placed!");
  
  return (
  
    <div className="flex w-full justify-center items-center flex-col mt-5">
      <img src={payment} className="w-full max-w-sm" />
      <p className="text-slate-500 text-3xl font-bold">Payment successful!</p>
    </div>
  );
};

export default Success;
