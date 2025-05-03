import { motion } from 'framer-motion';
import './FeaturedSolutions.css';

const FeaturedSolutions = () => {
  const features = [
    {
      title: 'Security First',
      description: '24/7 surveillance, gated access, and individual unit alarms for complete peace of mind.',
      icon: '🔒'
    },
    {
      title: 'Climate Control',
      description: 'Advanced temperature and humidity control systems to protect your sensitive items.',
      icon: '🌡️'
    },
    {
      title: 'Flexible Access',
      description: 'Extended access hours and convenient digital entry systems.',
      icon: '🔑'
    },
    {
      title: 'Expert Support',
      description: 'Professional storage advisors to help you find the perfect solution.',
      icon: '👥'
    },
    {
      title: 'Moving Assistance',
      description: 'Professional moving services and packing supplies available on-site.',
      icon: '📦'
    },
    {
      title: 'Digital Management',
      description: 'Easy online payments and account management through our secure portal.',
      icon: '💻'
    },
    {
      title: 'Size Variety',
      description: 'Wide range of unit sizes to accommodate any storage need.',
      icon: '📏'
    },
    {
      title: 'Clean & Maintained',
      description: 'Regularly cleaned and well-maintained facilities for your peace of mind.',
      icon: '✨'
    }
  ];

  return (
    <section className="featured-solutions">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose ACE Storage?</h2>
          <p>Experience the difference with our premium storage solutions</p>
        </motion.div>
        
        <motion.div 
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="features-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
