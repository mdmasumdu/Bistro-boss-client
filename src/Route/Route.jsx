import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import Ourmenu from "../Components/Ourmenu/Ourmenu";
import OrderFood from "../Components/OrderFood/OrderFood";
import Login from "../Components/Login/Login";
import Register from "../Components/Registration/Registration";


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
            },
            {
                path:"/orderfood/:title",
                element:<OrderFood></OrderFood>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]

    },
    
   
])

export default mycreatedroute;