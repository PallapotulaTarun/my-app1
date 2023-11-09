import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact()
{
    const Navigate = useNavigate();
    const handleSubmit  = () => {
        console.log();
    }

    return(

        <div className="Contact_bg">
            <h1>Contact us</h1>
            <p>you can reach us for any queries at </p>
            <p>Email:Tarun112@gmail.com</p>
            <p>Mobile:6303640188</p>
            <button onClick={()=>handleSubmit( Navigate('/Loginform',{replace:false}))} type="submit" class="btn btn-primary">Back</button>          
        </div>

    );
}