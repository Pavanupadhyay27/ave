import { motion } from 'framer-motion';
import './DeliveryAnimation.css';

const DeliveryAnimation = () => {
  return (
    <section className="delivery-section">
      <div className="container">
        <div className="delivery-animation">
          <img 
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXk0bXhvOXZpNjM0dzVqZXFld2tjZnA3eGlmaW83ZDhmZ2lpNG12ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6jnuP7BZPv3uAAtAFs/giphy.gif" 
            alt="Delivery Animation" 
            className="delivery-gif"
          />
          <motion.div
            className="delivery-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Swift & Secure Logistics</h2>
            <p>Efficient storage and transportation solutions at your fingertips</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAnimation;
