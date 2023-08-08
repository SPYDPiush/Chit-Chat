import React from "react";
import {AiOutlineVideoCamera} from "react-icons/ai";
import {BsPersonPlusFill} from "react-icons/bs";
import {BiDotsHorizontalRounded} from "react-icons/bi";

const Chatnavabar = ()=>{
    return(
        <div className="flex items-center justify-between p-2 h-[3.5rem] bg-[#35247a] text-[#fdf9f9]">
            <p className="font-bold text-xl text-center">
                Jana
            </p>
            <div className="text-white flex items-center justify-center gap-2">
                <p>{AiOutlineVideoCamera}</p>

            </div>

        </div>
    )
}

export default Chatnavabar