import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";


const Mainlayout = () => {

    const location =useLocation();
    const noheaderFooter =location.pathname.includes("login") || location.pathname.includes("register")
    return (
        <div>
            {
                noheaderFooter || <Navbar></Navbar>
            }
            <Outlet></Outlet>
          {
             noheaderFooter || <Footer></Footer>
          }
        </div>
    );
};

export default Mainlayout;