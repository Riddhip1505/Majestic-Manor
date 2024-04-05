import {React} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem,increaseQty } from "../redux/productSlide";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch()

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image
    }))
  };

  return (
    
    <div className="w-full min-w-[200px] max-w-[230px] bg-white hover:shadow-2xl drop-shadow-lg pt-5 py-4 px-4 mb-5 cursor-pointer rounded flex flex-col justify-center items-center ">
      {image ? (
        <>
          <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} >
          <div className="w-40 min-h-[160px]">
            <img src={image} className="max-h-120px" />
          </div>
          <h3 className="font-semibold text-slate-700 capitalize text-lg card-img-top mt-4 lex flex-col">
            {name}
          </h3>
          <p className="text-slate-600  font-medium">{category}</p>
          <p className="font-bold">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>
          </Link>
          <button
            className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
            onClick={handleAddCartProduct}
          >
            Add to Cart
      </button>
        </>
      ) : (
        <div className="min-h-[160px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;