import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links =<>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/">CONTACT US</NavLink>
    <NavLink to="/">DASHBOARD</NavLink>
    <NavLink to="/ourmenu">OUR MENU</NavLink>
    <NavLink to="/">OUR SHOP</NavLink>
    
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
        <button className="btn ">SIGN OUT</button>
        </div>
      </div>
    );
};

export default Navbar;