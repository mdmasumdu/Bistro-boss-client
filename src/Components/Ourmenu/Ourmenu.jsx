import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import menuimg from "../../assets/home/banner.jpg"
import Sectiontitle from "../Shared/Sectiontitle/Sectiontitle";
import useData from "../../Hooks/useData";
import MenuCategory from "../MenuCategory/MenuCategory";
// title,img,items,des

import desertimg from "../../assets/menu/dessert-bg.jpeg"
import pizzatimg from "../../assets/menu/pizza-bg.jpg"
import saladimg from "../../assets/menu/salad-bg.jpg"
import soupimg from "../../assets/menu/soup-bg.jpg"


const Ourmenu = () => {
    const [menus] =useData();

    const offered = menus.filter(menu=>menu.category === "offered")
    const dessert = menus.filter(menu=>menu.category === "dessert")
    const pizza = menus.filter(menu=>menu.category === "pizza")
    const salad = menus.filter(menu=>menu.category === "salad")
    const soup = menus.filter(menu=>menu.category === "soup")
    console.log("orred", offered)
    return (
        <div>
            <Helmet>
        <title>BISTRO BOSS|MENU</title>
       
      </Helmet>

            <Cover bgimg={menuimg} title={"our menu"}  description={"Would you like to try a dish?"}></Cover>
            <Sectiontitle heading={"Don't miss"} subheading={"Today's Offer"}></Sectiontitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert */}
       
         <MenuCategory items={dessert} title={"dessert"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={desertimg} ></MenuCategory>
       {/* pizza */}
         
         <MenuCategory items={pizza} title={"pizza"} description=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={pizzatimg} ></MenuCategory>
       {/* salad */}
       
         <MenuCategory items={salad} title={"salad"} description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={saladimg} ></MenuCategory>
       {/* soup*/}
        
         <MenuCategory items={soup} title={"soup"} description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={soupimg} ></MenuCategory>



        </div>
    );
};

export default Ourmenu;