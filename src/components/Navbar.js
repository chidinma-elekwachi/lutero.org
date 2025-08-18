import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import googlePlay from '../assets/google-play-store logo.png';
import appStore from '../assets/app-store-logo.png';
import '../pages/styles.css';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
     <nav className="navbar">
        <a href="/"><img src='/lutero-icon.png' alt="App Store" className='navbar-link'/></a>
        <div className="hamburger" onClick={handleToggle}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink 
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/premium"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Premium
        </NavLink>
        <NavLink 
          to="/terms"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Terms
        </NavLink>
        <NavLink 
          to="/privacy"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Privacy
        </NavLink>
        <NavLink 
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Contact Us
        </NavLink>
          <a href="/" onClick={closeMenu}><img src={appStore} alt="App Store" /></a>
          <a href="/" onClick={closeMenu}><img src={googlePlay} alt="Google Play" /></a>
        </div>
      </nav>
  )
}

export default Navbar