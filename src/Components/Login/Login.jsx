import { Link ,useLocation,useNavigate} from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'

import loginimg from "../../assets/others/authentication1.png"
import { useEffect, useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Login = () => {

   const location =useLocation();
   console.log(location)
   const capcharef =useRef(); 
   const [disabled,setDisabled] =useState(true);
   const navigate =useNavigate()
   const axiosSecure =useAxiosSecure();
   console.log(location)
const { logingoogle,signin} =useAuth();


const handlecapchavalidate=(e)=>{
  e.preventDefault()
   const user_captcha =capcharef.current.value;
   if (validateCaptcha(user_captcha)==true) {
     setDisabled(false)
}

else {
    setDisabled(true)
}
}



useEffect(()=>{
  loadCaptchaEnginge(6); 
},[])
const loginwithemailpass =(e)=>{
  e.preventDefault()

  const email =e.target.email.value;
  const password =e.target.password.value;
  signin(email,password)
  .then(res=>{
    if(res.user){
      Swal.fire({
        title: 'succsess!',
        text: 'succsesfully logged in',
        icon: 'success',
        confirmButtonText: 'Cool'

      })
      location?.state ? navigate(`${location?.state}`) : navigate('/');
    }
  })
  .catch(err=>{
    Swal.fire({
      title: 'Error!',
      text: `${err.message}`,
      icon: 'error',
      confirmButtonText: 'quit'
    })
  })

}
   
    const googleloginhandle =()=>{
        logingoogle()
        .then(res=>{
          console.log(res.user)
         const user={
          email:res.user.email,
          name:res.user.displayName
         }
          if(res.user){
            axiosSecure.post("/users",user)
            .then(res=>{console.log(res.data)})
          }
          Swal.fire({
            title: 'succsess!',
            text: 'succsesfully logged in',
            icon: 'success',
            confirmButtonText: 'Cool'
    
          })
          location?.state ? navigate(`${location?.state}`) : navigate('/');
        })
        .catch(err=>console.error(err))

    }
    return (
        <div className=" min-h-screen ">
  <div className="flex">
    <div className=" flex-1 flex flex-col items-center text-center lg:text-left">
     
     <img src={loginimg} alt="" />
    </div>
    <div className="flex-1 p-5">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={loginwithemailpass} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" placeholder="type recapcha" ref={capcharef} name="capcha" className="input input-bordered" required />
          <button className="btn btn-xs mt-3" onClick={handlecapchavalidate}>Validate</button>
      
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-300" disabled={disabled}>Login</button>
        </div>
      </form>
      
      <div className="p-5 text-center">
            New here? Please <Link className="text-blue-300" to="/register">Register</Link>
          </div>
          
      {/*  */}
      <div className="ml-5 flex flex-col items-center" >

        <p>Or login with google</p>
        <img onClick={googleloginhandle} className="w-10" src={"https://imagizer.imageshack.com/img922/453/4Hxr5L.png"} alt="" />
      </div>

    </div>
  </div>
</div>
    );
};

export default Login;