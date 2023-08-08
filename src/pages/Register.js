import React from "react";
import img from "../images/gallery.png";

const Register =()=>{
    return(
        <div className="bg-blue-500 h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center bg-white py-[2.7rem] px-[3.5rem] rounded-lg w-[25rem]">
                <span className="text-2xl font-bold text-[#5a56e6]">Chit Chat</span>
                <span className="text-xl text-[#4d79d1]">Register</span>
                <form className="flex flex-col gap-5">
                    <input type="text" placeholder="Enter Name" required className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-[120%] "/>
                    <input type="email" placeholder="Enter Email" required className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-[120%] "/>
                    <input type="password" placeholder="Enter password"   required className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-[120%] "/>
                    <input type="file" id="Avatar" className="hidden"/>
                    <label for="Avatar" className="flex  item-center cursor-pointer gap-2">
                        <img src={img} alt="avatar" className="w-9"/> 
                        <span className="text-[#8da4f1] text-base">Add an Avatar</span>
                    </label>
                    <button type="submit" className="bg-[#4e53a9] rounded-md py-2 text-white border-2 hover:bg-transparent hover:text-black ">Sign Up</button>
                </form>
                <p>
                    You hava account? <span className="text-[#4e53a9] underline hover:text-red-500">Login</span>
                </p>
            </div>
        </div>
    )

}

export default Register;