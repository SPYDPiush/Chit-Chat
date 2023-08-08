import React from "react";
import img from '../images/gallery.png'

const Navbar= ()=>{
    return(
        <div className="flex items-center justify-between p-2 h-[3.5rem] bg-[#35247a] text-[#fbf8f8]">
            <div className="font-bold">Chit Chat</div>
            <div className="flex items-center gap-2">
                <div className="border-2 rounded-3xl overflow-hidden"><img src={img} className="w-6 " /></div>
                <div>John Norton</div>
                <button className="bg-[#3e3ece] p-1 border-none cursor-pointer">
                    logout
                </button> 
            </div>
        </div>
    )
}
export default Navbar;