import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTruck, FaClock, FaBarcode, FaChartLine } from 'react-icons/fa'
import './services.css'

const CrossDocking = () => {
  useEffect(() => {
    document.title = 'Cross Docking - ACE Storage Solution'
  }, [])

  const features = [
    {
      icon: <FaTruck />,
      title: "Immediate Transfer",
      description: "Direct transfer from inbound to outbound vehicles"
    },
    {
      icon: <FaClock />,
      title: "Quick Turnaround",
      description: "Minimize storage time and handling costs"
    },
    {
      icon: <FaBarcode />,
      title: "Advanced Tracking",
      description: "Real-time inventory and shipment tracking"
    }
  ]

  return (
    <div className="service-page cross-docking">
      <div className="service-hero">
        <div className="container">
          <h1>Cross Docking Solutions</h1>
          <p className="service-subtitle">Streamline your supply chain with efficient cross docking services</p>
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
              <h2>Efficient Transfer Solutions</h2>
              <p>Our cross docking services provide:</p>
              <ul className="service-features-list">
                <li>Minimal handling and storage time</li>
                <li>Reduced warehouse costs</li>
                <li>Faster delivery to customers</li>
                <li>Real-time tracking systems</li>
                <li>Flexible scheduling options</li>
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
              <h2>Cross Docking Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <h3>Inbound Receipt</h3>
                  <p>Receive and scan incoming shipments</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <h3>Sorting & Staging</h3>
                  <p>Sort items by destination and prepare for transfer</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <h3>Outbound Loading</h3>
                  <p>Load sorted items onto outbound vehicles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CrossDocking
