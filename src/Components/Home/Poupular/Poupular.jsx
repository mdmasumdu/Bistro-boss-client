import { useEffect, useState } from "react";
import Sectiontitle from "../../Shared/Sectiontitle/Sectiontitle";
import Menu from "../../Shared/Sectiontitle/Menu";


const Poupular = () => {
const [menus,setmenus]=useState([])

    useEffect(()=>{
        fetch("Menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popul =data.filter(item=>item.category ==="popular")
            setmenus(popul)
        
        })
    },[])
    return (
        <div>
            <Sectiontitle heading={"Popular Items"}
            subheading={"From our menu"}></Sectiontitle>
           <div className="grid md:grid-cols-2 gap-5 mb-9">
           {
                menus.map(menu=><Menu key={menu._id} menu={menu}></Menu>)
             }
           </div>
        </div>
    );
};

export default Poupular;