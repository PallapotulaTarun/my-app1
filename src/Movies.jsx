import React, { Component } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {NavLink} from "react-router-dom";

// import { Link } from "react-router-dom";
import MovieDisplay from "./Movies1";


let url = "https://localhost:44360/api/Movie"
export class Movie extends Component{
    constructor(props){
        super(props);
        this.state={
            MovieData : ""
        }  
    }
render(){
return(
 
    <div>   
        <div>
            <nav className="navbar navbar-default">
                <ul>  
                    <li><NavLink className="navbar-band" to="/home">Chalo Cinema</NavLink></li>
                    <li class="wrapper">
                        <input class="search-input" placeholder="search"></input> 
                        <BsSearch className="search-icon"/>
                    </li>
                    <li className="right-btn"><NavLink className="navbar-band" to="/Home" style={{color:"#495057",paddingTop:"10px"}}>Logout</NavLink></li>
                    
                </ul>   

            </nav>
        </div>
        {/* {this.state.CourseData} */}
        <MovieDisplay  listdata = {this.state.MovieData}/>
        <div className="footer">
        <div className="line-footer">
        <p className="line"></p>
        <h3>Chalo Cinema</h3>
        <p className="line"></p>
        </div>
        <div className="social-media">
          <a href="/"><FaFacebookSquare className="social-icons"/></a>
          <a href="/"><FaInstagram className="social-icons"/></a>
          <a href="/"><FaYoutube className="social-icons"/></a>
          <a href="/"><FaTwitterSquare className="social-icons"/></a>
        </div>
        
          <div className="about">
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Help</a>
          </div>
        <p className="copy-right">Copyright 2023 © Chalo Cinema Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
)}
componentDidMount(){
    
     fetch(url,{method:'GET'})
     .then((res)=>res.json())
    //  .then ((res)=>(localStorage.setItem('videoLink',JSON.stringify(res))))
     .then ((data)=>{this.setState({MovieData:data})})
    console.log("MovieData"+this.MovieData)
    
}
}

export default  Movie;