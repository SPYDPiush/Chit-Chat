import React from "react";
import Sidebar from "../Components/Sidebar";
import Chatsection from "../Components/Chatsection";

const Home =()=>{
    return(
        <div className="bg-blue-500 flex items-center justify-center h-[100vh]">
            <div className="w-[65%] h-[80%] border-2 rounded-md flex overflow-hidden">
                <div className="w-[30%]  bg-[#523e82]"><Sidebar  /></div>
                <div className="w-[70%]"><Chatsection /></div>

            </div>
            
        </div>
    )

}

export default Home;