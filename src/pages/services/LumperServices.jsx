import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPeopleCarry, FaClipboardCheck, FaTools, FaUserClock } from 'react-icons/fa'
import './services.css'

const LumperServices = () => {
  useEffect(() => {
    document.title = 'Lumper Services - ACE Storage Solution'
  }, [])

  const features = [
    {
      icon: <FaPeopleCarry />,
      title: "Professional Team",
      description: "Experienced loading/unloading specialists"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Quality Assurance",
      description: "Careful handling and damage prevention"
    },
    {
      icon: <FaUserClock />,
      title: "Flexible Scheduling",
      description: "Available 24/7 for your loading needs"
    }
  ]

  return (
    <div className="service-page lumper-services-service">
      <div className="service-hero">
        <div className="container">
          <h1>Lumper Services</h1>
          <p className="service-subtitle">Professional loading and unloading solutions</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div
            className="service-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-intro">
              <h2>Expert Loading/Unloading Services</h2>
              <ul className="service-features-list">
                <li>Professional handling of goods</li>
                <li>Efficient load organization</li>
                <li>Inventory verification</li>
                <li>Equipment operation</li>
                <li>Damage prevention measures</li>
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
              <h2>Our Service Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <h3>Schedule Service</h3>
                  <p>Book your loading/unloading time</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <h3>Load Management</h3>
                  <p>Professional handling and organization</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <h3>Verification</h3>
                  <p>Confirm inventory and condition</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LumperServices
