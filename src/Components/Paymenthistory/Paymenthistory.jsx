import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Paymenthistory = () => {
const {user} =useAuth();
const axiosSecure =useAxiosSecure();


const {data}=useQuery({
    queryKey:["payemantsas",user?.email],
    queryFn:async ()=>{
        const res =await axiosSecure.get(`/payment/${user?.email}`);
        return res.data;
    }
})


    console.log(data)
    return (
        <div>
    
          
        </div>
    );
};

export default Paymenthistory;