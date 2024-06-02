// src/components/Navbar.js
import React from 'react';
import { Nav, NavLink, NavMenu } from '../styles';

const Navbar = () => (
  <Nav>
    <NavMenu>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/projects">
        Projects
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
    </NavMenu>
  </Nav>
);

export default Navbar;
