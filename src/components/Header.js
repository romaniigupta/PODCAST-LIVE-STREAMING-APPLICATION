import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <motion.header
            className="app-header"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
        >
            {/* Logo Section */}
            <div className="header-logo">
                <img
                    src="/images/symbol1.png"
                    alt="Logo"
                />
                <h1>Live Streaming Podcast</h1>
            </div>

            {/* Menu Icon for Mobile */}
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>

            {/* Navigation Links */}
            <nav className={menuActive ? "active" : ""}>
                <Link to="/">Home</Link>
                <Link to="/streaming">Go Live</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Call-to-Action Button */}
            <button className="cta-button">Sign Up</button>
        </motion.header>
    );
};

export default Header;
