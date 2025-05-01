import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const location = useLocation();
  const servicesRef = useRef({
    personal: useRef(null),
    business: useRef(null),
    climate: useRef(null),
    vehicle: useRef(null)
  });
  
  useEffect(() => {
    document.title = 'Our Services - ACE Storage Solution';
    
    // Scroll to specific service section if hash is present
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        if (servicesRef.current[id] && servicesRef.current[id].current) {
          servicesRef.current[id].current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const serviceDetails = [
    {
      id: 'personal',
      title: 'Personal Storage Solutions',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Our personal storage units are designed to meet all your residential storage needs, whether you\'re downsizing, moving, or simply need extra space.',
      features: [
        {
          title: 'Various Unit Sizes',
          description: 'From small 5x5 units perfect for seasonal items to large 10x30 units that can hold the contents of a 4-bedroom house.'
        },
        {
          title: 'Climate Control',
          description: 'Protect sensitive items like electronics, wood furniture, and family heirlooms from temperature and humidity damage.'
        },
        {
          title: 'Flexible Access',
          description: 'Access your belongings when you need them with extended hours and optional 24/7 access plans.'
        },
        {
          title: 'Monthly Rentals',
          description: 'No long-term commitments required - rent month-to-month for as long as you need.'
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Storage Solutions',
      image: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Optimize your workspace and manage inventory, documents, equipment, and supplies with our dedicated business storage options.',
      features: [
        {
          title: 'Document Storage',
          description: 'Secure, climate-controlled units for archived files and important business documents.'
        },
        {
          title: 'Inventory Management',
          description: 'Flexible space for seasonal inventory, excess stock, or e-commerce fulfillment needs.'
        },
        {
          title: 'Equipment Storage',
          description: 'Safe storage for tools, machinery, and other business equipment when not in use.'
        },
        {
          title: 'Business Amenities',
          description: 'Package acceptance, delivery services, and WiFi-enabled facilities at select locations.'
        }
      ]
    },
    {
      id: 'climate',
      title: 'Climate-Controlled Storage',
      image: 'https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Our climate-controlled units maintain a consistent temperature and humidity level to protect your sensitive belongings from environmental damage.',
      features: [
        {
          title: 'Temperature Regulation',
          description: 'Units kept between 55-85°F year-round, regardless of outdoor temperatures.'
        },
        {
          title: 'Humidity Control',
          description: 'Moisture levels monitored and maintained to prevent mold, mildew, and warping.'
        },
        {
          title: 'Air Filtration',
          description: 'Advanced air filtration systems that reduce dust and contaminants.'
        },
        {
          title: 'Ideal for Valuables',
          description: 'Perfect for electronics, artwork, antiques, musical instruments, and wood furniture.'
        }
      ]
    },
    {
      id: 'vehicle',
      title: 'Vehicle Storage Solutions',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Keep your cars, RVs, boats, motorcycles, and other vehicles protected from the elements with our specialized vehicle storage options.',
      features: [
        {
          title: 'Indoor & Outdoor Options',
          description: 'Choose from covered outdoor parking, canopy-covered spaces, or fully enclosed indoor units.'
        },
        {
          title: 'Wide Driveways',
          description: 'Easy access and maneuvering for vehicles of all sizes, including large RVs and boats.'
        },
        {
          title: 'Vehicle Prep Area',
          description: 'Dedicated space for washing and preparing your vehicle before or after storage.'
        },
        {
          title: 'Security Features',
          description: 'Gated access, 24/7 surveillance, and well-lit facilities to keep your vehicles safe.'
        }
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Storage Solutions</h1>
          <p>Discover our comprehensive range of storage options designed to meet your specific needs</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div 
            className="services-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Tailored Storage for Every Situation</h2>
            <p>
              At ACE Storage Solution, we understand that everyone's storage needs are unique. 
              That's why we offer a variety of storage options to accommodate personal belongings, 
              business inventory, climate-sensitive items, and vehicles of all types. 
              Browse our services below to find the perfect solution for your specific requirements.
            </p>
          </motion.div>
          
          <div className="services-navigation">
            <ul>
              {serviceDetails.map(service => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className="service-nav-link">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {serviceDetails.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
              id={service.id}
              ref={servicesRef.current[service.id]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              
              <div className="service-info">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {service.features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a href="/contact" className="btn btn-primary">Inquire About {service.title}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container">
          <div className="services-cta">
            <h2>Not Sure Which Storage Option is Right for You?</h2>
            <p>Our storage experts can help you determine the perfect solution for your specific needs.</p>
            <a href="/contact" className="btn btn-secondary">Get Expert Advice</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services