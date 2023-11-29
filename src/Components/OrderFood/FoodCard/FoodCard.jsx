/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

 
const FoodCard = ({items}) => {
  const navigate=useNavigate();
const {user} =useAuth();
const axiosSecure =useAxiosSecure();
const location =useLocation();
const [,refetch]=useCart();

  const handleaddtocart=(cartitem)=>{
    const {name,recipe,image,price,_id} =cartitem;

    const cart ={
      cartitemid:_id,
      email:user?.email,
      name,
      recipe,
      image,
      price

    }

    if(user && user?.email){
      axiosSecure.post("/carts",cart)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            title: "succsesfully added to cart",
            text: "Happy shopping",
            icon: "success"
          });
        }
        refetch();
      })

    }
    else{
      Swal.fire({
        title: "PLease login to add to cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login",{state:location.pathname})
        }
      });
    }

    console.log(cartitem)

  }

    const {name,recipe,image,price} = items;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

          
        <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <h1 className="absolute bg-slate-900 text-white right-0 mt-16 mr-12">{price}</h1>
           
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
    <button className="btn btn-outline bg-slate-100 border-0 border-b-4" onClick={()=>handleaddtocart(items)}>Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;