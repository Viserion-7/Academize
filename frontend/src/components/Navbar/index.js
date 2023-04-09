import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png';

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

  return (
    <>
      <Nav class="navbar">
        <Bars onClick={toggleNav} />
        <NavLink to='/' activeStyle>
        <div class="logo">
            <img src={logo} alt="logo" class="image"/>
        </div>

        </NavLink>
        <NavMenu class={isNavExpanded ? 'active' : ''}>
          <NavLink to='/' activeStyle>
            <div class="links"> 
              <h1>
                Home
              </h1>
            </div>
          </NavLink>
          <NavLink to='/dashboard' activeStyle>
            <div class="links">
              <h1>
                Dashboard
              </h1>
            </div>
          </NavLink>
          <NavLink to='/profile' activeStyle>
            <div style={{position: 'absolute', color: 'white'}}>
              <CgProfile class="profileIcon"/>
            </div>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;