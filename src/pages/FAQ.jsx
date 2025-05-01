import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './FAQ.css'

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ - ACE Storage Solution';
  }, []);

  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const faqCategories = [
    { id: 'general', name: 'General Questions' },
    { id: 'rental', name: 'Rental Process' },
    { id: 'payment', name: 'Payments & Billing' },
    { id: 'security', name: 'Security & Access' },
    { id: 'moving', name: 'Moving & Storage Tips' }
  ];

  const faqData = {
    general: [
      {
        id: 'general-1',
        question: 'What are your facility hours?',
        answer: 'Our office hours vary by location, but most facilities are open Monday through Friday from 9AM to 6PM, Saturday from 10AM to 4PM, and closed on Sunday. Access hours to storage units are typically 6AM to 10PM daily, with 24/7 access available at select locations for an additional fee.'
      },
      {
        id: 'general-2',
        question: 'Do you offer climate-controlled storage units?',
        answer: 'Yes, we offer climate-controlled storage units at all of our locations. These units maintain a consistent temperature (typically between 55-85°F) and humidity level year-round, making them ideal for sensitive items like electronics, wood furniture, important documents, and collectibles.'
      },
      {
        id: 'general-3',
        question: 'What size storage units do you offer?',
        answer: 'We offer a wide range of storage unit sizes to meet different needs, from small 5\'x5\' units (perfect for seasonal items or small furniture) to large 10\'x30\' units (can hold the contents of a 4-bedroom house). Visit our Pricing page to see all available sizes and find the right one for your needs.'
      },
      {
        id: 'general-4',
        question: 'Can I store a vehicle in a storage unit?',
        answer: 'Yes, we offer dedicated vehicle storage options for cars, boats, RVs, motorcycles, and other vehicles. These include outdoor parking spaces, covered parking, and fully enclosed units depending on your needs and budget. All vehicle storage areas feature wide driveways for easy access and maneuvering.'
      },
      {
        id: 'general-5',
        question: 'Are there any items I cannot store?',
        answer: 'Yes, for safety and legal reasons, you cannot store: hazardous materials, flammable liquids or gases, explosives, weapons, illegal items, perishable food, live animals or plants, and unregistered vehicles. Please contact us if you have questions about specific items.'
      }
    ],
    rental: [
      {
        id: 'rental-1',
        question: 'How do I rent a storage unit?',
        answer: 'Renting a storage unit is easy! You can reserve a unit online, by phone, or in person at any of our facilities. To complete the rental, you\'ll need a valid government-issued photo ID, sign our rental agreement, and make your first payment. After that, you can move in immediately.'
      },
      {
        id: 'rental-2',
        question: 'Do I need to sign a long-term contract?',
        answer: 'No, all our storage units are rented on a month-to-month basis. This gives you the flexibility to rent for as long as you need without being locked into a long-term commitment. We do offer discounts for pre-paying several months in advance.'
      },
      {
        id: 'rental-3',
        question: 'Is there a security deposit?',
        answer: 'Yes, we require a refundable security deposit equal to one month\'s rent. This deposit is fully refundable when you move out, assuming the unit is clean, undamaged, and your account is up to date.'
      },
      {
        id: 'rental-4',
        question: 'Can I change my unit size if needed?',
        answer: 'Yes, you can transfer to a different size unit at any time, subject to availability. If you find your current unit is too small or larger than needed, simply contact our office to arrange a transfer. There is no transfer fee, but the rental rate will adjust based on the new unit size.'
      },
      {
        id: 'rental-5',
        question: 'What if I need to cancel my reservation?',
        answer: 'If you need to cancel a reservation, please contact us as soon as possible. Reservations canceled at least 48 hours before the scheduled move-in date will receive a full refund of any prepaid amounts. Cancellations with less notice may be subject to a cancellation fee.'
      }
    ],
    payment: [
      {
        id: 'payment-1',
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including credit cards (Visa, MasterCard, American Express, Discover), debit cards, checks, and cash (in-person only). For your convenience, we also offer automatic payment options to ensure you never miss a payment.'
      },
      {
        id: 'payment-2',
        question: 'When is the monthly rent due?',
        answer: 'Monthly rent is due on the same day each month as your move-in date. For example, if you moved in on the 15th, your rent would be due on the 15th of each month. You\'ll receive a reminder a few days before your due date.'
      },
      {
        id: 'payment-3',
        question: 'Do you offer any discounts?',
        answer: 'Yes, we offer several discount programs including military discounts (active and veterans), student discounts with valid ID, senior discounts, and promotions for long-term prepayment. Contact your local facility for current discount offers and eligibility requirements.'
      },
      {
        id: 'payment-4',
        question: 'What happens if I miss a payment?',
        answer: 'If a payment is missed, a late fee will be applied after a 5-day grace period. We\'ll make multiple attempts to contact you about the overdue payment. If the account remains delinquent for an extended period (typically 30+ days), a lien may be placed on the unit contents in accordance with state law.'
      },
      {
        id: 'payment-5',
        question: 'How do I set up automatic payments?',
        answer: 'Setting up automatic payments is easy and can be done when you sign your rental agreement or at any time during your rental period. You can register a credit or debit card to be automatically charged on your due date each month. This can be set up in person at our office or through your online account.'
      }
    ],
    security: [
      {
        id: 'security-1',
        question: 'How secure are your storage facilities?',
        answer: 'Our facilities feature comprehensive security measures including 24/7 video surveillance, electronic gate access that requires individual access codes, perimeter fencing, bright lighting throughout the property, and on-site management during office hours. Some locations also offer individual unit alarms for added security.'
      },
      {
        id: 'security-2',
        question: 'Who has access to my storage unit?',
        answer: 'Only you and individuals you authorize have access to your storage unit. Each tenant receives a unique access code for the facility gate, and you provide your own lock for the unit. Our staff will never enter your unit without your permission except in emergencies or as required by law.'
      },
      {
        id: 'security-3',
        question: 'Do I need insurance for my stored items?',
        answer: 'While not mandatory at all locations, we strongly recommend having insurance coverage for your stored belongings. We offer affordable storage insurance plans starting at $10/month, or you can check if your homeowner\'s or renter\'s insurance policy extends coverage to items in storage.'
      },
      {
        id: 'security-4',
        question: 'What type of lock should I use?',
        answer: 'We recommend using a high-quality disc lock or cylinder lock, which are more difficult to cut than standard padlocks. These locks are available for purchase at our office, or you can bring your own. We recommend avoiding combination locks, as they can be less secure.'
      },
      {
        id: 'security-5',
        question: 'What happens in case of fire or other emergency?',
        answer: 'All our facilities are equipped with fire detection systems and fire extinguishers throughout the property. We have established emergency protocols, and our staff are trained to handle various emergency situations. In case of severe weather events, we take appropriate measures to secure the facility.'
      }
    ],
    moving: [
      {
        id: 'moving-1',
        question: 'Do you sell packing supplies?',
        answer: 'Yes, we sell a variety of packing supplies at our office, including boxes of various sizes, bubble wrap, packing paper, tape, mattress covers, furniture covers, and more. We also offer moving kits that include an assortment of essential packing materials at a discounted price.'
      },
      {
        id: 'moving-2',
        question: 'What size unit do I need for my belongings?',
        answer: 'The size you need depends on what you\'re storing. As a general guide: a 5\'x5\' unit is similar to a small closet, a 10\'x10\' is about the size of a standard bedroom, and a 10\'x20\' can hold the contents of a 2-3 bedroom house. We have a detailed size guide on our website, or our staff can help you determine the right size for your needs.'
      },
      {
        id: 'moving-3',
        question: 'How should I prepare furniture for storage?',
        answer: 'To best protect furniture in storage: clean all items thoroughly before storing, disassemble large pieces if possible (keep hardware in labeled bags), cover wood furniture with breathable covers (not plastic, which can trap moisture), store mattresses flat or on edge using mattress covers, and leave space around items for air circulation.'
      },
      {
        id: 'moving-4',
        question: 'Do you offer moving truck rental or moving assistance?',
        answer: 'Some of our locations offer moving truck rental or free move-in truck use for new tenants. We can also recommend local moving companies that offer competitive rates to our customers. Please check with your local facility for available moving services and partnerships.'
      },
      {
        id: 'moving-5',
        question: 'How should I organize my storage unit?',
        answer: 'For maximum efficiency: create an aisle down the center for access, place items you\'ll need frequently at the front, stack boxes with heavier items on the bottom, use shelving to maximize vertical space, create a map/inventory of where items are located, leave space for air circulation, and avoid placing anything directly against the walls.'
      }
    ]
  };

  return (
    <div className="faq-page">
      <div className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our storage services</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div 
            className="faq-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="faq-categories">
              {faqCategories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="faq-content">
              <h2>{faqCategories.find(c => c.id === activeCategory).name}</h2>
              
              <div className="faq-list">
                {faqData[activeCategory].map(item => (
                  <div 
                    key={item.id}
                    className={`faq-item ${openItems[item.id] ? 'open' : ''}`}
                  >
                    <button 
                      className="faq-question"
                      onClick={() => toggleItem(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="toggle-icon">
                        {openItems[item.id] ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>
                    
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="faq-more-questions"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Still Have Questions?</h2>
            <p>
              Cant find the answer youre looking for? Our team is ready to help with any questions
              you might have about our storage solutions.
            </p>
            <div className="more-questions-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <a href="tel:+1234567890" className="btn btn-outline">Call (123) 456-7890</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ