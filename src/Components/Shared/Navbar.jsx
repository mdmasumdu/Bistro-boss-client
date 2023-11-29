import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { CiShoppingCart } from "react-icons/ci";
import useCart from "../../Hooks/useCart";


const Navbar = () => {

  const {logout,user} =useAuth()
  const [cart] =useCart();

  const signout=()=>{
    logout()
    .then(()=>{})
    .catch(()=>{})
  }

    const links =<>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/">CONTACT US</NavLink>
    <NavLink to="/dashboard">DASHBOARD</NavLink>
    <NavLink to="/ourmenu">OUR MENU</NavLink>
    
    <NavLink to={`/orderfood/${"salad"}`}>OUR SHOP</NavLink>
    {
      user ? "": <NavLink to="/register">REGISTER</NavLink>
    }
    <NavLink to={"/dashboard/cart"} className={"badge badge-secondary"}><span className="text-xl"><CiShoppingCart></CiShoppingCart></span>+{cart.length}</NavLink>
    </>
    return (
        <div className="navbar text-white fixed z-10 bg-opacity-30 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-o">
          <Link className="font-bold">BISTRO BOSS</Link>
          <p>Restaurent</p>
          </div>
        </div>
        
        <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-bold">
           {
            links
           }
          </ul>
        </div>
       {
        user ?       <div className="avatar">
        <div className="w-12 m-2">
          <img src={user?.photoURL} />
        </div>
      </div> : ""
       }
      {
        user ?<button className="btn " onClick={signout}>SIGN OUT</button> :<NavLink className={"font-bold menu menu-horizontal"} to="/login">LOGIN</NavLink>
      }  
        </div>
      </div>
    );
};

export default Navbar;