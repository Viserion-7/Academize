import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <Nav class="navbar">
        <Bars />
  
        <NavMenu>
          
          <NavLink to='/' activeStyle>
            <div class="logo">
              <img src={logo} alt="logo" class="image"/>
            </div>
            
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