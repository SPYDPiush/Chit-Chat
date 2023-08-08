import React from "react";
import img from "../images/gallery.png";
const User= ()=>{
    return(
        <div className="flex flex-col justify-center overflow-auto" style={{maxHeight:"460px"}}>
            <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]">
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={img} className="w-8" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">Lamo</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>
            <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]">
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={img} className="w-8" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">Lamo</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>
            <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]">
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={img} className="w-8" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">Lamo</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>
            <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]">
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={img} className="w-8" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">Lamo</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>
            <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]">
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={img} className="w-8" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">Lamo</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>
            <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]">
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={img} className="w-8" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">Lamo</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>
            <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]">
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={img} className="w-8" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">Lamo</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>
            
            
            
           
           
        </div>
    )
}

export default User;