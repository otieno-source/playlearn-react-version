import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="navlist">
            <Link to="/kidsEvents">UpComing Kids Event</Link>
            <Link to="/searchTutor">Search Tutor</Link>
            <Link to="/signupForm">Become a Tutor</Link>
            <Link to="/home">Home</Link>
        </div>
    )
}

export default Nav;