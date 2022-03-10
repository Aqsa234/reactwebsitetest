import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return(
        <>
        <div>
        <h1> 404 Error page</h1>
        <p>Soory,this page does not exits</p>
        <NavLink to="/" style={{color: "red"}}> Go Back </NavLink>
        </div>
    
        </>

    );
}
export default Error;