import React, { useState } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
       <header>
            <img 
                src="https://i.ibb.co/wZVPystV/Party-Manifesto-and-Govt-Schemes-Implementation-Status-Check-20250327-180457-0000.png" 
                alt="logo" 
            />
            <span style={{ color: "grey" }}>|</span>
            <p>GovtInsight</p>
            <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
            <ul className={menuOpen ? "nav-menu active":"nav-menu"}>
                <li><a href="/">Home</a></li>
                <li><a href="/">View</a></li>
                <li><a href="/">Complaint</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </header>
    );
}

export default Header;