/* eslint-disable react/prop-types */
import Cover from "../Shared/Cover";
import Menu from "../Shared/Sectiontitle/Menu";
import { Link } from 'react-router-dom';


const MenuCategory = ({title,img,items,description}) => {


    return (
        <div>
            {
                title &&  <Cover bgimg={img} title={title}  description={description}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-5 mb-9 mt-10">
           {
                items.map(menu=><Menu key={menu._id} menu={menu}></Menu>)
             }
           </div>

           <div>
           {
                title &&  <Link to={`/orderfood/${title}`}><button className="border-b-2 w-3/12 mx-auto mb-10 text-center">ORDER NOW</button></Link>
               
              }
           </div>
            
               
            
        </div>
    );
};

export default MenuCategory;