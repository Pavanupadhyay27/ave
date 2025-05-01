import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../../assets/ace-logo.jsx'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo">{logo}</div>
              <span>ACE Storage Solution</span>
            </Link>
            <p className="footer-tagline">
              Secure storage solutions for all your needs
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/locations">Locations</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services#personal">Personal Storage</Link></li>
                <li><Link to="/services#business">Business Storage</Link></li>
                <li><Link to="/services#climate">Climate Controlled</Link></li>
                <li><Link to="/services#vehicle">Vehicle Storage</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Support</h4>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column contact-info">
              <h4>Contact Us</h4>
              <address>
                <p>123 Storage Ave</p>
                <p>Anytown, USA 12345</p>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
                <p><a href="mailto:info@acestoragesolution.com">info@acestoragesolution.com</a></p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ACE Storage Solution. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer