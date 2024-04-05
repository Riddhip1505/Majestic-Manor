
import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 

  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${'http://localhost:5000'}/product`)
      const resData = await res.json()
      //console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  },[])
  return (
    <>
     <Toaster />
    <div> 
       <Header/>
       <main className='pt-16 bg-slate-200 min-h-[calc(100ch)] '>
        <Outlet/>
       </main>
    </div>
    </>
  );
}

export default App;
