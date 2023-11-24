import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import Ourmenu from "../Components/Ourmenu/Ourmenu";


const mycreatedroute = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/ourmenu",
                element:<Ourmenu></Ourmenu>
            }
        ]

    },
    
   
])

export default mycreatedroute;