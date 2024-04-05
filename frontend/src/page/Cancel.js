import React from 'react'
import cancel from  '../food/cancel.gif';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cancel = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/cart");
  }, 2600);
  return (
    <div className="flex w-full justify-center items-center flex-col mt-5">
      <img src={cancel} className="w-full max-w-sm" />
      <p className="text-slate-500 text-3xl font-bold">Payment cancelled!</p>
    </div>
  )
}

export default Cancel