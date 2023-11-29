import { NavLink, Outlet } from "react-router-dom";
import { CiShoppingCart,CiCircleList} from "react-icons/ci";
import { FaHome ,FaCalendarAlt } from "react-icons/fa";
import { MdOutlinePayment,MdReviews } from "react-icons/md"
import { TbBrandBooking } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { FaBook,FaUsers } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {

    const[isAdmin] =useAdmin()

  console.log(isAdmin)
// const isAdmin =true;

    return (
        <div className="flex">
            <div className="w-[280px] bg-orange-400 min-h-screen">
                <ul className="menu">
                    {
                        isAdmin ? <>
                        <li><NavLink to="/"><FaHome></FaHome>Admin Home</NavLink></li>
                        <li><NavLink to="/"><ImSpoonKnife></ImSpoonKnife> Add Items</NavLink></li>
                        <li><NavLink to="/"><CiCircleList></CiCircleList> Manage Items</NavLink></li>
                        <li><NavLink to="/"><FaBook></FaBook> Manage Bookings</NavLink></li>
                        <li><NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                        <li><NavLink to="/"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/"> <FaCalendarAlt />Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/paymenthistory"><MdOutlinePayment></MdOutlinePayment>Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><CiShoppingCart></CiShoppingCart> My Cart</NavLink></li>
                    <li><NavLink to="/"><MdReviews></MdReviews>Add Review</NavLink></li>
                    <li><NavLink to="/"><TbBrandBooking></TbBrandBooking>My Booking</NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

                </ul>

            </div>
            <div className="flex-1">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;