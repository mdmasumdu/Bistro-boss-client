
import Sectiontitle from "../../Shared/Sectiontitle/Sectiontitle";
import Menu from "../../Shared/Sectiontitle/Menu";
import useData from "../../../Hooks/useData";


const Poupular = () => {

const [menus] =useData()
const popul =menus.filter(item=>item.category ==="popular")
    return (
        <div>
            <Sectiontitle heading={"Popular Items"}
            subheading={"From our menu"}></Sectiontitle>
           <div className="grid md:grid-cols-2 gap-5 mb-9">
           {
                popul.map(menu=><Menu key={menu._id} menu={menu}></Menu>)
             }
           </div>
        </div>
    );
};

export default Poupular;