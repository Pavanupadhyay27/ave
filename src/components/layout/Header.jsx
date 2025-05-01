import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/ace-logo.jsx'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo">{logo}</div>
          <span className="company-name">ACE Storage Solution</span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <button className="close-menu" onClick={toggleMenu}>
            <FaTimes />
          </button>
          <ul className="nav-list">
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/locations" onClick={closeMenu}>Locations</NavLink></li>
            <li><NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu} className="contact-button">Contact Us</NavLink></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </header>
  )
}

export default Header