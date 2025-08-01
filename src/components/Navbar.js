import React from 'react'
import { NavLink } from 'react-router-dom';
import googlePlay from '../assets/google-play-store logo.png';
import appStore from '../assets/app-store-logo.png';
import '../pages/styles.css';

function Navbar() {
  return (
     <nav className="navbar">
        <a href="/"><img src='/lutero-icon.png' alt="App Store" className='navbar-link'/></a>
        <div className="nav-links">
        <NavLink 
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/premium"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Premium
        </NavLink>
        <NavLink 
          to="/terms"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Terms
        </NavLink>
        <NavLink 
          to="/contact"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Contact Us
        </NavLink>
          <a href="/"><img src={appStore} alt="App Store" /></a>
          <a href="/"><img src={googlePlay} alt="Google Play" /></a>
        </div>
      </nav>
  )
}

export default Navbar