import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart,refetch] =useCart();

    const totalPrice =cart.reduce((total,item)=>total + item.price,0);
    const axiosSecure=useAxiosSecure();

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

                axiosSecure.delete(`/carts/${id}`)
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

    return (
        <div>
              <div className="flex justify-evenly items-center bg-slate-300 m-10">
              <h1>Total Orders:{cart.length}</h1>
               <h1>Total Price:{totalPrice}</h1>
          {
            cart.length ?     <Link to="/dashboard/payment"> <button className="btn btn-success">Pay</button></Link>: <button disabled className="btn btn-success">Pay</button>
          }
              </div>
              

              <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((carta,idx)=><tr key={carta._id}>
            <th>{idx+1}</th>
            <td className="w-10"><img src={carta.image} alt="" /></td>
            <td>{carta.name}</td>
            <td>$ {carta.price}</td>
            <td><button onClick={()=>handledelete(carta._id)} className="btn bg-orange-400"><MdDelete></MdDelete> </button></td>
          </tr>)
      }
    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Cart;