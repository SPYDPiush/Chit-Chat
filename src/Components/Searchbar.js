import React, { useContext, useState } from "react";
import { collection, query, where,getDocs,setDoc,doc, updateDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../Firebase";
import { AuthContext } from "../Context/Authcontext";

const Search=()=>{

    const [username,setUsername] = useState("");
    const [user,setUser] = useState(null);
    const [err,setErr] = useState(false);

    const {currentUser} = useContext(AuthContext);

    const handlesearch =async ()=>{
        const q = query
        (collection(db,"users"),
        where("displayName", "==", username));
        try{

            const querySnapshot = await getDoc(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        }
        catch(err){
            setErr(true);
            console.log(err);

        }

    }

    const handlekey = (e)=>{
        e.code === "Enter" && handlesearch();
        
    };


    const handleselect = async ()=>{

        // check whether the group (chats in firedatabase) is exist,  if not create 

        // create user chats

        const combinedUID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid+currentUser.uid 

        try{

        const res = await getDoc(doc(db,"chats",combinedUID));

        if(!res.exists()){

            // create a chat in chats collection
            await setDoc(doc(db,"chats",combinedUID),{
                message:[],
            });

            // create user chats
           await updateDoc(doc(db,"userChats",currentUser.uid),{
            [combinedUID+".userInfo"]:{
                uid:user.id,
                displayName:user.displayName,
                photoURL:user.photoURL
            },
            [combinedUID+".date"]:serverTimestamp()
           })

           await updateDoc(doc(db,"userChats",currentUser.uid),{
            [combinedUID+".userInfo"]:{
                uid:currentUser.id,
                displayName:currentUser.displayName,
                photoURL:currentUser.photoURL
            },
            [combinedUID+".date"]:serverTimestamp()
           })

        }
        setUsername()
        setUser(null)
    }
    catch(err){

    }



    }

    return(
        <div className="border-b-2 border-blue-400 px-4 py-3 text-white">
            <input type="text" placeholder="Find the user" style={{minWidth:"100%" , "::placeholder" : { color : "red" }}} className="outline-none bg-transparent text-xl" onKeyDown={handlekey}  onChange={ (e) => setUsername(e.target.value)}  value={username}/>

        {err && <span>user is not found!</span>}   
        { user &&   <div className="flex gap-4 my-1 p-3 items-center text-white cursor-pointer hover:bg-[#121830]" onClick={handleselect}>
                <div className="rounded-3xl border-2 overflow-hidden object-cover"><img src={user.photoURL} className="w-8" alt="image" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl">{user.displayName}</span>
                    <span className="text-gray-300">Hello</span>
                </div>
            </div>}
        </div>
    )
}
export default Search;