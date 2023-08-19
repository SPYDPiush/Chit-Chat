import React, { useContext, useEffect, useState } from "react";
import img from "../images/gallery.png";
import { AuthContext } from "../Context/Authcontext";
import { onSnapshot } from "firebase/firestore";
import { collection, query, where,getDoc,setDoc,doc, updateDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../Firebase";
const User= ()=>{

    const {currentuser} = useContext(AuthContext);


    const [chats,setChats] = useState([])

    useEffect(()=>{

        const unsub = onSnapshot(doc(db,"userChats",currentuser.uid),(snapshot)=>{
            setChats(snapshot.data());
        })

    },[currentuser.uid])

    console.log(chats)

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