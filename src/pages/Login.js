import React from "react";

const Login =()=>{
    return(
        <div className="bg-blue-500 h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center bg-white py-[2.7rem] px-[2.4rem] rounded-lg w-[23rem]">
                <span className="text-2xl font-bold text-[#5a56e6]">Chit Chat</span>
                <span className="text-xl text-[#4d79d1]">Login</span>
                <form className="flex flex-col gap-5">
                    <input type="email" placeholder="Enter Email" className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-[95%] mx-auto"/>
                    <input type="password" placeholder="Enter password"  className="p-2 border-b-[0.01rem] border-[#4e53a9] outline-none text-base w-[95%] mx-auto"/>
                    <button type="submit" className="bg-[#4e53a9] rounded-md py-2 text-white border-2 hover:bg-transparent hover:text-black ">Login</button>
                </form>
                <p>
                    You don't hava an account? <span className="text-[#4e53a9] underline hover:text-red-500 ">Sign Up</span>
                </p>
            </div>
        </div>
    )

}

export default Login;