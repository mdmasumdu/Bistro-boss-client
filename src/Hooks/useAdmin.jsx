import {  useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
const {user}=useAuth();
const axiosSecure=useAxiosSecure();
    const {data:isAdmin}=useQuery({
        queryKey:["admin",user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/user/admin/${user?.email}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem("access-token")}`
                }
            });
             return res.data.admin

        }
    })
     console.log(isAdmin)
    return [isAdmin]
   
};

export default useAdmin;