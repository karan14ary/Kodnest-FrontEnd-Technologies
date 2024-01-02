import React from "react";
import { NavLink } from 'react-router-dom'
export default function Navbar(){
    return(
        <ul>
            <li>
               <NavLink to="/">Home</NavLink>  
            </li>
            <li>
            <NavLink to="/mi">MI</NavLink>  
            </li>
            <li>
            <NavLink to="/csk">CSK</NavLink>  
            </li>
            <li>
            <NavLink to="/rcb">RCB</NavLink>  
            </li>
        </ul>
    )
}