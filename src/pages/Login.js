import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Login =()=>{
    const [err,setErr] = useState(false);
    const [errmgs,setErrmgs] = useState("");
    const navigate = useNavigate();

    const handlesubmit = async (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        }
        catch (err){
            setErr(true);
            setErrmgs(err);

        }
    };

    return(
        <div className="bg-blue-500 h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center bg-white py-[2.7rem] px-[2.4rem] rounded-lg w-[23rem]">
                <span className="text-2xl font-bold text-[#5a56e6]">Chit Chat</span>
                <span className="text-xl text-[#4d79d1]">Login</span>
                <form className="flex flex-col gap-5" onSubmit={handlesubmit}>
                    <input type="email" placeholder="Enter Email" className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-[95%] mx-auto"/>
                    <input type="password" placeholder="Enter password"  className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-[95%] mx-auto"/>
                    <button type="submit" className="bg-[#4e53a9] rounded-md py-2 text-white border-2 hover:bg-transparent hover:text-black ">Login</button>
                    {err && <span className="text-red-500">{errmgs}</span>}
                </form>
                <p>
                    You don't hava an account? <Link to ="/register">  <span className="text-[#4e53a9] underline hover:text-red-500 ">Sign Up</span></Link>
                </p>
            </div>
        </div>
    )

}

export default Login;