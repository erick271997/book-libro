import React from "react";
import NavBar from './navar'

function Layout({Children}){
    return(
        <div>
            <NavBar/>
            <div>{Children}</div>
        </div>
    )
}

export default Layout;