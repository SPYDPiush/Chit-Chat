import React, { useContext } from "react";
import img from '../images/gallery.png'
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../Context/Authcontext";

const Navbar= ()=>{

    const {currentuser} = useContext(AuthContext);

    return(
        <div className="flex items-center justify-between p-2 h-[3.5rem] bg-[#35247a] text-[#fbf8f8]">
            <div className="font-bold">Chit Chat</div>
            <div className="flex items-center gap-2">
                <div className="border-2 rounded-3xl overflow-hidden w-9 h-9 object-contain"><img src={currentuser.photoURL} className="object-contain" alt="profile photo" /></div>
                <div>{currentuser.displayName}</div>
                < button className="bg-[#3e3ece] p-1 border-none cursor-pointer" onClick={()=> signOut(auth) }>
                    logout
                </button> 
            </div>
        </div>
    )
}
export default Navbar;