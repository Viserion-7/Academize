import React  from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import logo from "./assets/newerlogo.png";
import { IoIosLogIn } from 'react-icons/io';
const Navbar = () => {

    const handleAnalyzeClick = () => {
        // event.preventDefault();
        const analyzeSection = document.getElementById('analyze');
        analyzeSection.scrollIntoView({ behavior: 'smooth' });
      };
    
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
          setIsAuth(true);
        }
      }, [isAuth]);
    
    return (
        <>
        <nav className="stickyNav">
            <nav className="main-nav" style={{height:'90px'}}>
                <div>
                    <Link to="/">
                        <img style={{marginTop:'7px'}} src={logo} alt="ACADEMIZE" className="App-logo"/>
                    </Link>
                </div>
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
                    <ul>
                        <li>
                            <div className="navlinks">
                                <a href="/#analyze" style={{color: "black"}} onClick={() => handleAnalyzeClick}>Analyze</a>
                            </div>
                        </li>
                        {/* <li>
                            <div className="navlinks">
                            <Link to="/marks" style={{}} onClick={() => setShowMediaIcons(false)}>Analyze Marks</Link>
                            </div>
                        </li> */}
                        <li>
                            <div className="navlinks">
                            <Link to="/add" style={{color: "black"}}  onClick={() => setShowMediaIcons(false)}>Upload Marks</Link>
                            </div>
                        </li>
                        <li>
                            <div className="navlinks">
                            <Link to="/addStudents" style={{color: "black"}}  onClick={() => setShowMediaIcons(false)}>Students</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div style={{fontSize: "18px", alignItems: "center", display: "flex", justifyContent: "end"}}>
                {isAuth ?
                    <Link to="/logout" className="logout"><IoIosLogOut/></Link>:
                    <Link to="/login" className="logout" ><IoIosLogIn/></Link>
                }
                </div>
                <div className="social-media">
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <FaBars style={{color:'white'}}/>
                        </a>
                    </div>
                </div>
            </nav>
            </nav>
        </>
    );
};

export default Navbar;