import Header from "./Header";
import { bgUrl } from "../utils/constant";
import { useState } from "react";
const Login=()=>{
    const[isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            <div className="absolute">
            <img src={bgUrl} alt="bgimage"/>
            </div>
                <form className="bg-black text-white  opacity-80 absolute w-4/12 p-14 my-36 mx-auto left-0 right-0">
                <h1 className="font-bold mb-5 text-3xl">{isSignInForm ? "Sign In" :  "Sign Up"}</h1>
{!isSignInForm && (<input type="text" className="rounded-lg border-2  border-white  p-3.5 my-3 bg-transparent border-solid w-full" placeholder="Name"/>)}

<input type="text" className=" rounded-lg border-2  border-white bg-transparent p-3.5 my-3 w-full" placeholder="Email or mobile number" />

<input type="password" className="rounded-lg border-2  border-white  p-3.5 my-3 bg-transparent border-solid w-full" placeholder="Password"/>

<button className="bg-red-600 rounded-lg p-2 my-4 w-full ">Submit</button>

<h2 className="text-center">OR</h2>

<button className="w-full bg-gray-400 my-3 p-2 rounded-lg">use code</button>

<h1 className="text-center">Forgot Password</h1>

<div className="flex my-2">
    <input className="w-4 mx-2 bg-white text-black" type="checkbox"checked />
    <h1 className="text-l">Remember me</h1>
</div>

<p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already regisered? Sign In Now"}</p>
    </form>
        </div>
    )
}
export default Login;