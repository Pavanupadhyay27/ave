import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  useEffect(() => {
    document.title = 'Pricing - ACE Storage Solution';
  }, []);

  const [unitSize, setUnitSize] = useState('small');
  const [storageType, setStorageType] = useState('standard');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const pricingData = {
    small: {
      standard: {
        size: '5\' x 5\' (25 sq ft)',
        price: 49,
        equivalent: 'Small closet',
        items: ['Seasonal items', 'Sporting equipment', 'Small furniture', 'Business documents']
      },
      climate: {
        size: '5\' x 5\' (25 sq ft)',
        price: 69,
        equivalent: 'Small closet',
        items: ['Electronics', 'Vinyl records', 'Artwork', 'Important documents']
      }
    },
    medium: {
      standard: {
        size: '10\' x 10\' (100 sq ft)',
        price: 119,
        equivalent: 'Large bedroom',
        items: ['Furniture sets', 'Appliances', 'Office equipment', 'Seasonal inventory']
      },
      climate: {
        size: '10\' x 10\' (100 sq ft)',
        price: 159,
        equivalent: 'Large bedroom',
        items: ['Antique furniture', 'Musical instruments', 'Business archives', 'Collectibles']
      }
    },
    large: {
      standard: {
        size: '10\' x 20\' (200 sq ft)',
        price: 199,
        equivalent: '1-2 bedroom apartment',
        items: ['Household contents', 'Large furniture', 'Major appliances', 'Business inventory']
      },
      climate: {
        size: '10\' x 20\' (200 sq ft)',
        price: 249,
        equivalent: '1-2 bedroom apartment',
        items: ['Wooden furniture', 'High-value electronics', 'Artwork', 'Business equipment']
      }
    },
    vehicle: {
      standard: {
        size: 'Varies by vehicle',
        price: 149,
        equivalent: 'Car, boat, or RV',
        items: ['Cars', 'Boats', 'RVs', 'Motorcycles', 'Trailers']
      },
      covered: {
        size: 'Varies by vehicle',
        price: 189,
        equivalent: 'Car, boat, or RV',
        items: ['Cars', 'Boats', 'RVs', 'Motorcycles', 'Trailers']
      }
    }
  };

  const faqs = [
    {
      question: 'Are there any hidden fees?',
      answer: 'We believe in transparent pricing. The monthly rate includes standard access hours and basic security features. Optional services like insurance, 24/7 access, and climate control may have additional costs that will be clearly explained before you sign your rental agreement.'
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No, all our storage units are available on a month-to-month basis. You can rent for as long as you need without being locked into a long-term commitment.'
    },
    {
      question: 'Is there a security deposit?',
      answer: 'Yes, we require a refundable security deposit equal to one month\'s rent. This deposit is fully refundable when you move out, assuming the unit is clean and undamaged.'
    },
    {
      question: 'Do you offer any discounts?',
      answer: 'Yes, we offer several discount programs including military discounts, student discounts, senior discounts, and promotions for long-term prepayment. Contact us for current discount offers.'
    },
    {
      question: 'Do I need insurance for my stored items?',
      answer: 'While not mandatory, we strongly recommend having insurance coverage for your stored belongings. We offer affordable storage insurance plans, or you can check if your homeowner\'s or renter\'s insurance policy extends coverage to items in storage.'
    }
  ];

  const selectedPricing = unitSize === 'vehicle' 
    ? pricingData[unitSize][storageType === 'climate' ? 'covered' : 'standard'] 
    : pricingData[unitSize][storageType];

  return (
    <div className="pricing-page">
      <div className="page-header">
        <div className="container">
          <h1>Storage Unit Pricing</h1>
          <p>Find the perfect storage solution that fits your budget</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div 
            className="pricing-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Flexible and Affordable Storage Options</h2>
            <p>
              At ACE Storage Solution, we offer competitive rates for all our storage units. 
              Use the selectors below to find pricing for the specific unit size and type you need.
            </p>
          </motion.div>
          
          <motion.div 
            className="pricing-calculator"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="calculator-controls">
              <div className="control-group">
                <label>Unit Size</label>
                <div className="button-group">
                  <button 
                    className={unitSize === 'small' ? 'active' : ''} 
                    onClick={() => setUnitSize('small')}
                  >
                    Small
                  </button>
                  <button 
                    className={unitSize === 'medium' ? 'active' : ''} 
                    onClick={() => setUnitSize('medium')}
                  >
                    Medium
                  </button>
                  <button 
                    className={unitSize === 'large' ? 'active' : ''} 
                    onClick={() => setUnitSize('large')}
                  >
                    Large
                  </button>
                  <button 
                    className={unitSize === 'vehicle' ? 'active' : ''} 
                    onClick={() => setUnitSize('vehicle')}
                  >
                    Vehicle
                  </button>
                </div>
              </div>
              
              <div className="control-group">
                <label>Storage Type</label>
                <div className="button-group">
                  <button 
                    className={storageType === 'standard' ? 'active' : ''} 
                    onClick={() => setStorageType('standard')}
                  >
                    {unitSize === 'vehicle' ? 'Outdoor' : 'Standard'}
                  </button>
                  <button 
                    className={storageType === 'climate' ? 'active' : ''} 
                    onClick={() => setStorageType('climate')}
                    disabled={unitSize === 'vehicle' && storageType === 'climate'}
                  >
                    {unitSize === 'vehicle' ? 'Covered' : 'Climate Controlled'}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="pricing-result">
              <div className="price-card">
                <div className="price-header">
                  <h3>{unitSize === 'vehicle' 
                    ? `${storageType === 'climate' ? 'Covered' : 'Outdoor'} Vehicle Storage` 
                    : `${storageType === 'climate' ? 'Climate Controlled' : 'Standard'} ${unitSize.charAt(0).toUpperCase() + unitSize.slice(1)} Unit`}
                  </h3>
                  <div className="price">
                    <span className="amount">${selectedPricing.price}</span>
                    <span className="period">/month</span>
                  </div>
                </div>
                
                <div className="price-details">
                  <div className="detail-row">
                    <span className="detail-label">Size:</span>
                    <span className="detail-value">{selectedPricing.size}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Equivalent to:</span>
                    <span className="detail-value">{selectedPricing.equivalent}</span>
                  </div>
                  
                  <h4>Typical Items:</h4>
                  <ul className="items-list">
                    {selectedPricing.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="btn btn-primary btn-full">
                    Rent This Unit
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="pricing-faqs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Pricing FAQs</h2>
            <div className="faqs-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container">
          <div className="pricing-cta">
            <h2>Need Help Choosing the Right Unit?</h2>
            <p>Our storage experts are ready to assist you in finding the perfect storage solution for your specific needs and budget.</p>
            <Link to="/contact" className="btn btn-secondary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing