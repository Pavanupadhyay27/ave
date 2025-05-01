import { motion } from 'framer-motion'
import { FaLock, FaThermometerHalf, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: <FaLock />,
      title: '24/7 Security',
      description: 'Comprehensive security systems with 24/7 monitoring, electronic gate access, and individual unit alarms'
    },
    {
      icon: <FaThermometerHalf />,
      title: 'Climate Control',
      description: 'Temperature-regulated units that protect your sensitive items from extreme temperature and humidity'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Convenient Locations',
      description: 'Multiple facilities strategically located for easy access from major highways and residential areas'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Access',
      description: 'Extended access hours with options for 24-hour access to suit your schedule and storage needs'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose ACE Storage?</h2>
          <p className="section-subtitle">Discover the benefits that make us the premier storage solution provider</p>
        </div>
        
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              variants={itemVariants}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features