import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";


const Users = () => {
const axiosSecure =useAxiosSecure();
const {user}=useAuth();

    const {refetch,data =[]} =useQuery({
        queryKey:["cart",user?.email],
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/users`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem("access-token")}`
                }
            });
            return res.data;
        }

    })



    const handledelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                .then(res=>{
                    if(res.data.deletedCount){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                    }
                })
            
             
            }
          });
          

    }



    const makeadmin=(id)=>{
        console.log(id)
       axiosSecure.patch(`/admin/users/${id}`)
       .then(res=>{
        if(res.data.modifiedCount){
            refetch();
            Swal.fire({
                title: "Made admin",
                text: "admin.",
                icon: "success"
              });
        }
       })


    }
    return (
        <div>
            <div>
                <h2>Total users:{data.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
     {
        data.map((user,idx)=> <tr key={user._id} className="bg-base-200">
        <th>{idx+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user?.role === "admin" ? "Admin" :<button onClick={()=>makeadmin(user._id)} className="btn bg-orange-600">{<FaUsers></FaUsers>}</button>}</td>
        <td><button onClick={()=>handledelete(user._id)} className="btn bg-orange-500">{<RiDeleteBin6Line></RiDeleteBin6Line>}</button></td>
      </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;