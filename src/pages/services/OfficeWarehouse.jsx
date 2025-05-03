import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBuilding, FaWifi, FaParking, FaKey } from 'react-icons/fa'
import './services.css'

const OfficeWarehouse = () => {
  useEffect(() => {
    document.title = 'Office & Warehouse Space - ACE Storage Solution'
  }, [])

  const features = [
    {
      icon: <FaBuilding />,
      title: "Flexible Spaces",
      description: "Customizable office and warehouse combinations"
    },
    {
      icon: <FaWifi />,
      title: "Modern Amenities",
      description: "High-speed internet, utilities, and modern facilities"
    },
    {
      icon: <FaParking />,
      title: "Ample Parking",
      description: "Secure parking for staff and visitors"
    }
  ]

  return (
    <div className="service-page office-warehouse-service">
      <div className="service-hero">
        <div className="container">
          <h1>Office & Warehouse Space Rental</h1>
          <p className="service-subtitle">Professional spaces tailored to your business needs</p>
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
              <h2>Flexible Space Solutions</h2>
              <ul className="service-features-list">
                <li>Combined office and warehouse spaces</li>
                <li>24/7 secure access</li>
                <li>Loading docks and freight elevators</li>
                <li>Modern office amenities</li>
                <li>Flexible lease terms</li>
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
              <h2>Rental Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <h3>Space Assessment</h3>
                  <p>Determine your space requirements</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <h3>Customization</h3>
                  <p>Configure space to your needs</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <h3>Move-In</h3>
                  <p>Smooth transition to your new space</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OfficeWarehouse
