// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaCaretDown } from 'react-icons/fa';
import Habot from '../images/Habot.png';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Habot} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#find-suppliers" className="nav-link">Find Suppliers</a>
        <div className="nav-dropdown">
          <a href="#find-service-tags" className="nav-link1">Find Service Tags <FaCaretDown /></a>
        </div>
        {isAuthenticated ? (
          <button onClick={() => logout({ returnTo: window.location.origin })} className="login-button">
            Logout
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()} className="login-button">
            Login/SignUp
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
