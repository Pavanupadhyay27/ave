import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWarehouse, FaShieldAlt, FaTemperatureLow, FaCheckCircle } from 'react-icons/fa'
import './services.css'

const DryPallet = () => {
  useEffect(() => {
    document.title = 'Dry Pallet Storage - ACE Storage Solution'
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const features = [
    {
      icon: <FaWarehouse />,
      title: "Climate-Controlled Environment",
      description: "Temperature and humidity-controlled storage spaces to protect your goods"
    },
    {
      icon: <FaShieldAlt />,
      title: "24/7 Security",
      description: "Round-the-clock surveillance and secure access control"
    },
    {
      icon: <FaTemperatureLow />,
      title: "Temperature Monitoring",
      description: "Constant monitoring to maintain optimal storage conditions"
    }
  ]

  return (
    <div className="service-page dry-pallet">
      <div className="service-hero">
        <div className="container">
          <h1>Dry Pallet Storage Solutions</h1>
          <p className="service-subtitle">Professional warehousing solutions for your business needs</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div
            className="service-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="service-intro">
              <h2>Secure and Efficient Storage Solutions</h2>
              <p>Our state-of-the-art dry pallet storage facilities offer:</p>
              <ul className="service-features-list">
                <li>Flexible storage options from short-term to long-term</li>
                <li>Advanced inventory management systems</li>
                <li>Easy access for loading and unloading</li>
                <li>Climate-controlled environments</li>
                <li>24/7 security monitoring</li>
              </ul>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="service-process">
              <h2>Our Storage Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <h3>Initial Consultation</h3>
                  <p>Discuss your storage needs and requirements</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <h3>Space Allocation</h3>
                  <p>Assign dedicated storage area based on your needs</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <h3>Inventory Management</h3>
                  <p>Set up tracking and management systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DryPallet
