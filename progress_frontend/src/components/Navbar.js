import React  from "react";
import { FaYoutubeSquare } from "react-icons/fa";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.png";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div>
                    <Link to="/">
                        <img src={logo} class="logo"/>
                    </Link>
                </div>
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
                    <ul>
                        <li>
                            <Link to="/dashboard" style={{color:"white"}} onClick={() => setShowMediaIcons(false)}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/profile" style={{color:"white"}} onClick={() => setShowMediaIcons(false)}>Profile</Link>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.youtube.com/@amFOSS" target="_amfoss" className="youtube"><FaYoutubeSquare/></a>
                        </li>
                    </ul>

                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <FaBars style={{color:'white'}}/>
                        </a>
                    </div>
                </div>
            </nav>
            {/* <section >
                <Dashboard />
            </section> */}
        </>
    );
};

export default Navbar;