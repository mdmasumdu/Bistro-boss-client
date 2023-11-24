/* eslint-disable react/prop-types */


const FoodCard = ({items}) => {

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
    <button className="btn btn-outline bg-slate-100 border-0 border-b-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;