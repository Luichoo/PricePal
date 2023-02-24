import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import "./Navbar.scss"

const Navbar = () => {
    // const [click, setClick] = useState(false);
    return(
    <nav className="navbar">
        <ul>
            <li>
                <Link to="/" className="nav-links">
                    Home
                </Link>
            </li>
        </ul>
            </nav>
    );
    

};

export default Navbar;