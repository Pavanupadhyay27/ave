import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaShip, FaBoxOpen, FaChartBar, FaGlobe } from 'react-icons/fa'
import './services.css'

const ThreePL = () => {
  useEffect(() => {
    document.title = '3PL Services - ACE Storage Solution'
  }, [])

  const features = [
    {
      icon: <FaShip />,
      title: "Supply Chain Management",
      description: "End-to-end logistics solutions"
    },
    {
      icon: <FaBoxOpen />,
      title: "Inventory Management",
      description: "Real-time tracking and optimization"
    },
    {
      icon: <FaGlobe />,
      title: "Global Network",
      description: "Worldwide logistics coverage"
    }
  ]

  return (
    <div className="service-page three-pl-service">
      <div className="service-hero">
        <div className="container">
          <h1>Third-Party Logistics (3PL) Solutions</h1>
          <p className="service-subtitle">Comprehensive logistics management for your business</p>
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
              <h2>Complete Logistics Solutions</h2>
              <ul className="service-features-list">
                <li>Supply chain optimization</li>
                <li>Warehouse management</li>
                <li>Transportation coordination</li>
                <li>Inventory tracking</li>
                <li>Distribution services</li>
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
              <h2>Our 3PL Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <h3>Assessment</h3>
                  <p>Analyze your supply chain needs</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <h3>Implementation</h3>
                  <p>Set up customized logistics solutions</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <h3>Optimization</h3>
                  <p>Continuous improvement of operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ThreePL
