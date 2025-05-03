import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  useEffect(() => {
    document.title = 'About Us - ACE Storage Solution'
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="ACE Storage Facility" />
            </motion.div>
            
            <motion.div 
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2005, ACE Storage Solution began with a simple mission: to provide secure, 
                convenient, and affordable storage solutions for individuals and businesses. What started 
                as a single facility has grown into multiple locations serving communities across the country.
              </p>
              <p>
                Our founders recognized a need for high-quality storage options that prioritized security, 
                accessibility, and customer service. Today, we continue to uphold these core values while 
                constantly innovating to meet the evolving needs of our customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="mission-values"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                To provide exceptional storage solutions with unmatched security, convenience, 
                and customer service, helping people and businesses manage their space effectively and with peace of mind.
              </p>
            </div>
            
            <div className="values">
              <h2>Our Values</h2>
              <ul>
                <li>
                  <h3>Integrity</h3>
                  <p>We operate with honesty and transparency in all our business practices.</p>
                </li>
                <li>
                  <h3>Security</h3>
                  <p>We provide industry-leading security measures to protect our customers' belongings.</p>
                </li>
                <li>
                  <h3>Innovation</h3>
                  <p>We continuously seek new ways to improve our facilities and services.</p>
                </li>
                <li>
                  <h3>Customer Focus</h3>
                  <p>We prioritize customer satisfaction and responsive service.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div 
            className="team-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">Meet the people who drive our commitment to excellence</p>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="John Davis" />
                </div>
                <h3>John Davis</h3>
                <p className="member-role">CEO & Founder</p>
                <p className="member-bio">With over 20 years in the storage industry, John brings unparalleled expertise and vision to ACE Storage.</p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Wilson" />
                </div>
                <h3>Sarah Wilson</h3>
                <p className="member-role">COO</p>
                <p className="member-bio">Sarah oversees all operations, ensuring each facility maintains our high standards of security and service.</p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Michael Chang" />
                </div>
                <h3>Michael Chang</h3>
                <p className="member-role">CTO</p>
                <p className="member-bio">Michael leads our technology initiatives, from security systems to customer account management platforms.</p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Jessica Martinez" />
                </div>
                <h3>Jessica Martinez</h3>
                <p className="member-role">Customer Experience Director</p>
                <p className="member-bio">Jessica ensures every customer interaction exceeds expectations, from first contact to ongoing service.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container">
          <div className="about-cta">
            <h2>Experience the ACE Difference</h2>
            <p>Join thousands of satisfied customers who trust us with their storage needs.</p>
            <a href="/contact" className="btn btn-secondary">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About