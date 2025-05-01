import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 'personal',
      title: 'Personal Storage',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Whether you\'re downsizing, moving, or just need extra space, our personal storage units provide the perfect solution for your belongings.',
      features: ['Various unit sizes', 'Month-to-month rentals', 'Online account management']
    },
    {
      id: 'business',
      title: 'Business Storage',
      image: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Optimize your workspace and store inventory, documents, equipment and more in our secure business storage facilities.',
      features: ['Document storage', 'Inventory management', 'Equipment storage', 'Flexible terms']
    },
    {
      id: 'climate',
      title: 'Climate-Controlled Storage',
      image: 'https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Protect sensitive items from extreme temperatures and humidity with our state-of-the-art climate-controlled units.',
      features: ['Constant temperature', 'Humidity control', 'Air filtration', 'Extra protection']
    },
    {
      id: 'vehicle',
      title: 'Vehicle Storage',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Keep your cars, RVs, boats, and other vehicles safe and secure with our specialized vehicle storage options.',
      features: ['Indoor & outdoor options', 'Easy access', 'Wash stations', 'Maintenance services']
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
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Storage Solutions</h2>
          <p className="section-subtitle">Tailored storage options to match your specific needs</p>
        </div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
              id={service.id}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="service-link">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="services-cta">
          <h3>Not sure which storage solution is right for you?</h3>
          <p>Our storage experts are ready to help you find the perfect storage solution for your specific needs.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </div>
    </section>
  )
}

export default Services