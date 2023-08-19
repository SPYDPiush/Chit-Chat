import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext()

export const Authcontextprovider = ({children})=>{
    const[currentuser,setCurrentuser] =  useState({})


    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentuser(user);
        });
        return () =>{
            unsub();
        };

    },[])
return(
    < AuthContext.Provider value={{currentuser}}>
        {children}
    </ AuthContext.Provider>
)

}