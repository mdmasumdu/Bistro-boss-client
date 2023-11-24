/* eslint-disable react/prop-types */
import FoodCard from "../OrderFood/FoodCard/FoodCard";


const RetrunCard = ({itema}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
             {
                itema.map(dess=><FoodCard key={dess._id} items={dess}></FoodCard>)
             }
        </div>
    );
};

export default RetrunCard;