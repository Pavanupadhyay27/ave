import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">Ready to Secure Your Storage Solution?</h2>
          <p className="cta-description">
            Experience the peace of mind that comes with ACE Storage Solution. 
            Contact us today to find the perfect storage unit for your needs.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/pricing" className="btn btn-outline">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction