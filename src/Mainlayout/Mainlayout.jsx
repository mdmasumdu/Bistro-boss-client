import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;