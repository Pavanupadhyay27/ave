import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero elementor-section-stretched">
      <div className="hero-background-container">
        {/* Add placeholder image */}
        <div className="hero-background-placeholder"></div>
        <iframe 
          className="hero-background-video"
          src="https://www.youtube.com/embed/4mGy26yeTY8?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=4mGy26yeTY8&enablejsapi=1&origin=http://localhost:5173"
          title="Ace storage solution in Arlington Texas"
          loading="eager"
          width="640"
          height="360"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            Secure Storage Solutions <br /> for Every Need
          </h1>
          <p className="hero-subtitle">
            Climate-controlled units, 24/7 security, and flexible storage options for personal and business needs
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero