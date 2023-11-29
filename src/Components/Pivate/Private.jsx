/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Private = ({children}) => {
    const location =useLocation();

    const {user,loading}=useAuth();
    if(loading){
        return "loading"
    }

    if(user?.email){
        return children;

    }


 return <Navigate state={location.pathname}  to="/login"></Navigate>
};

export default Private;