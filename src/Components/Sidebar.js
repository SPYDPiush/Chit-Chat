import React from "react";
import Navbar from "./Navbar";
import Search from "./Searchbar";
import User from "./User";

const Sidebar = ()=>{
    return(
        <div className="">
            <Navbar />
            <Search />
            <User />
        </div>
    )
}

export default Sidebar