import React  from "react";
import { FaYoutubeSquare } from "react-icons/fa";
import "./navbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.png";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
          setIsAuth(true);
        }
      }, [isAuth]);
    
    return (
        <>
            <nav className="main-nav">
                <div>
                    <Link to="/home">
                        <img src={logo} className="logo"/>
                    </Link>
                </div>
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
                    <ul>
                        <li>
                            <Link to="/student" style={{color:"white"}} onClick={() => setShowMediaIcons(false)}>Student Details</Link>
                        </li>
                        <li>
                            <Link to="/profile" style={{color:"white"}} onClick={() => setShowMediaIcons(false)}>Profile</Link>
                        </li>
                        <li>
                            {isAuth ?
                            <Link to="/" style={{color:"white"}} >Logout</Link>:
                            <Link to="/login" style={{color:"white"}} >Login</Link>
                             }
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