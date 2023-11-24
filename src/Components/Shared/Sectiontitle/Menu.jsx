/* eslint-disable react/prop-types */

const Menu = ({menu}) => {

    const {name,recipe,image,price} =menu;


    return (
        <div  className="flex gap-3">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
          <div>
          <h1>{name}---------------</h1>
          <p>{recipe}</p>
          </div>
          <h1 className="text-yellow-500">${price}</h1>
            
        </div>
    );
};

export default Menu;