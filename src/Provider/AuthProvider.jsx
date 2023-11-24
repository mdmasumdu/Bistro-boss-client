/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AuthContext =createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)

    const authinfo ={
        user,
        loading

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;