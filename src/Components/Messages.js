import React from "react";

const Messages = ()=>{
    return(
        <div className="flex items-center gap-[2rem] mb-3">
            <div className="flex flex-col gap-1 text-slate-500  font-semibold">
                <img src="https://images.pexels.com/photos/17086695/pexels-photo-17086695/free-photo-of-woman-in-a-white-dress-sitting-on-a-wooden-bridge-and-covering-her-face-with-the-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="userimg" className="w-[3.5rem] h-[3.5rem] rounded-full object-cover  "/>
                <span>Just now</span>
            </div>
            <div className="m max-w-[80%] flex flex-col gap-2">
               <p className="px-[1.2rem] py-[.7rem] bg-white rounded-tr-md rounded-br-md rounded-bl-md "> Hello this side Jane. </p>
               {/* <img src="" alt="otheruserimg" className="w-[3.5rem] h-[3.5rem] rounded-full object-cover" /> */}
            </div>
        </div>
        
    )
}

export default Messages;