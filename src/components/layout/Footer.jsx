import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>ACE Storage Solution</h3>
              <p>Secure storage solutions for all your needs</p>
              <Link to="/contact" className="footer-cta">Get Expert Advice</Link>
            </div>

            <div className="footer-links-grid">
              <div className="footer-links-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/locations">Locations</Link></li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4>Support</h4>
                <ul>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4>Contact Us</h4>
                <ul className="footer-contact">
                  <li>123 Storage Ave</li>
                  <li>Anytown, USA 12345</li>
                  <li><a href="tel:+1234567890">(123) 456-7890</a></li>
                  <li><a href="mailto:info@acestoragesolution.com">info@acestoragesolution.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 ACE Storage Solution. All rights reserved.</p>
            <ul className="footer-legal">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;