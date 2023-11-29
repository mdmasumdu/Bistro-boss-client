import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import Ourmenu from "../Components/Ourmenu/Ourmenu";
import OrderFood from "../Components/OrderFood/OrderFood";
import Login from "../Components/Login/Login";
import Register from "../Components/Registration/Registration";
import Private from "../Components/Pivate/Private";
import Secret from "../Components/Secret/Secret";
import Dashboard from "../Mainlayout/Dashboard/Dashboard";
import Cart from "../Components/Cart/Cart";
import Paymenthistory from "../Components/Paymenthistory/Paymenthistory";
import Users from "../Components/Users/Users";
import Payment from "../Components/Payment/Payment";


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
            },
            {
                path:"/secret",
                element:<Private><Secret></Secret></Private>
            }
            ,
           
        ]

    },
    {
        path:"dashboard",
        element:<Private><Dashboard></Dashboard></Private>,
        children:[
            {
                path:"cart",
                element:<Cart></Cart>

            },
            {
                path:"paymenthistory",
                element:<Paymenthistory></Paymenthistory>
            },

            // admin

            {
                path:"users",
                element:<Users></Users>
            },
            {
                path:"payment",
                element:<Payment></Payment>
            }
        ]
    }
    
   
])

export default mycreatedroute;