import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <div>
            <Link to="/">home</Link> 
            <Link to="/create">Create</Link>
        </div>
    )
}

export default NavBar;