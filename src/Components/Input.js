import React from "react";
import {TfiClip} from "react-icons/tfi";
import {GrGallery} from  "react-icons/gr";

const Input = ()=>{
    return(
        <div className="flex justify-between items-center bg-slate-300"  >
            <input type="text" placeholder="type here...." className="outline-none p-6 text-xl border-none text-black w-full bg-transparent"/>
            <div className="flex items-center justify-center p-2 cursor-pointer gap-3 text-xl">
                {/* <img src="" alt="clip icon" className="w-[2rem]"/> */}
                <TfiClip />
                <input type="file" id="file" className="hidden"/>
                <label for="file"><GrGallery /></label>
                <button className="px-3 py-2 bg-blue-400 text-slate-100 rounded-sm border-none">Send</button>
            </div>
        </div>
    )
}

export default Input;