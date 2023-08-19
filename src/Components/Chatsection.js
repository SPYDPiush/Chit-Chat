import React from "react";
import Chatnavabar from "./Chatnavbar";
import Message from "./Message";
import Input  from "./Input";

const Chatsection =()=>{
    return(
        <div className="relative">
            <Chatnavabar />
            <Message />
            <Input />
        </div>
    )
}

export default Chatsection;