import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">About us</NavLink>
    
        <NavLink exact  activeClassName="active_class"  to="/service">Service</NavLink>
        <NavLink exact  activeClassName="active_class"  to="/search">Search</NavLink>
        <NavLink exact  activeClassName="active_class"  to="/contact">Contact us</NavLink>
        <NavLink exact  activeClassName="active_class"  to="/user/aqsa/zubair">User</NavLink>
        </div>
        </>

    );
}
export default Navbar;