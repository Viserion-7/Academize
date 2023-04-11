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
            <nav className="main-nav" style={{height:'90px'}}>
                <div>
                    <Link to="/home">
                        <img style={{marginTop:'7px'}} src={logo} alt="ACADEMIZE" className="logo"/>
                    </Link>
                    <span>
                        Hello
                    </span>
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
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <FaBars style={{color:'white'}}/>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;