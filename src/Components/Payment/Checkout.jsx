import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";


const Checkout = () => {
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
    const[cart]=useCart();
    const {user} =useAuth();
    const totalprice =cart.reduce((total,item)=>total+item.price,0)
    console.log(totalprice)
    const [cliensecret,setclientsecret]=useState('')


    useEffect(()=>{
      axiosSecure.post("/create-payment-intent",{price:totalprice})
      .then(res=>{
        console.log(res.data.clientSecret)
        setclientsecret(res.data.clientSecret)
      })

    },[axiosSecure,totalprice])


const handleSubmit =async(e)=>{
    e.preventDefault();

    if(!stripe || !elements){
        return
    }

    const card =elements.getElement(CardElement)


    if(!card){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }


      const {paymentIntent,error:confirmerror} = await stripe.confirmCardPayment(cliensecret,
        {
          payment_method:{
            card:card,
            billing_details:{
              name:user?.displaName ||"annonomous",
              email:user?.email||"annonomous"
            }
          }
        })

        if(confirmerror){
          console.log("confirmeroor",confirmerror)
        }
        else{
          console.log("confirm intent",paymentIntent)
          if(paymentIntent.status === "succeeded"){
            console.log(paymentIntent.id)

            const payment={
               email:user.email,
               trasanctiond:paymentIntent.id,
               price:totalprice,
               date: new Date(),
               cartId:cart.map(item=>item._id),
               Menuid:cart.map(item=>item.cartitemid),
               stautus:"pending"
            }


            const res =await axiosSecure.post("/payment",payment);
            console.log(res.data.insertedId)
          }
        }
    }

    
    return (
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button  className="btn bg-orange-500 ml-6 mt-5" type="submit" disabled={!stripe ||!cliensecret}>
        Pay
      </button>
    </form>
    );
};

export default Checkout;