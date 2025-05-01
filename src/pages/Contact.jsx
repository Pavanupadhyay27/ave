import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - ACE Storage Solution';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any questions or to reserve your storage unit</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Get In Touch</h2>
              <p>
                Have questions about our storage units or services? Looking to reserve a unit? 
                Our friendly customer service team is here to help you find the perfect storage solution.
              </p>
              
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h3>Main Office</h3>
                    <p>123 Storage Ave<br />Anytown, USA 12345</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p><a href="tel:+1234567890">(123) 456-7890</a></p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p><a href="mailto:info@acestoragesolution.com">info@acestoragesolution.com</a></p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-content">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-links">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531973!3d-37.817432679751734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1644911746192!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              {submitSuccess && (
                <div className="success-message">
                  <h3>Thank you for contacting us!</h3>
                  <p>We have received your message and will get back to you shortly.</p>
                </div>
              )}
              
              {!submitSuccess && (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'form-input error' : 'form-input'}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email <span className="required">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'form-input error' : 'form-input'}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'form-input error' : 'form-input'}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="faq-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Frequently Asked Questions</h2>
            <div className="faqs-contact">
              <div className="faq-item">
                <h3>How do I reserve a storage unit?</h3>
                <p>You can reserve a storage unit by calling us directly, using our online reservation system, or visiting any of our locations in person.</p>
              </div>
              
              <div className="faq-item">
                <h3>What identification do I need to rent a unit?</h3>
                <p>You'll need a valid government-issued photo ID such as a driver's license, state ID, or passport to rent a unit.</p>
              </div>
              
              <div className="faq-item">
                <h3>How quickly can I move in after reserving?</h3>
                <p>In most cases, you can move in immediately after completing the rental agreement and payment. Some special units may require additional preparation time.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can I visit my storage unit after hours?</h3>
                <p>Standard access hours are from 6AM to 10PM daily. Extended access and 24/7 access options are available for an additional fee at most locations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact