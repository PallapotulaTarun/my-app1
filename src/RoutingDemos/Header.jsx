
import { BsSearch } from "react-icons/bs";
import React  from "react";
import {NavLink} from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Header()
{  
    return(
        <div>
            <nav className="navbar navbar-default">
                <ul>  
                    <li><NavLink className="navbar-band" to="/home">Chalo Cinema</NavLink></li>
                    <li class="wrapper">
                        <input class="search-input" placeholder="search"></input> 
                        <BsSearch className="search-icon"/>
                    </li>
                    <li className="right-btn"><NavLink className="navbar-band" to="/LoginForm" style={{color:"#495057",paddingTop:"10px"}}>Login</NavLink></li>
                    <li className="rrr"><NavLink className="navbar-band" to="/Cities" style={{paddingRight:"0px"}}>Location</NavLink>
                        <FaMapMarkerAlt style={{background:"none",color:"#e9ecef",paddingLeft:"0px"}} className="search-icon"/>
                    </li>
                </ul>   

            </nav>
        </div>
        
    );
}