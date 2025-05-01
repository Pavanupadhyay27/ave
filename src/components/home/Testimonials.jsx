import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      quote: 'ACE Storage Solution has been a lifesaver during our home renovation. The climate-controlled unit kept all our furniture in perfect condition, and the staff were incredibly helpful throughout the process.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Small Business Owner',
      quote: 'As a small business owner, I needed a flexible storage solution for my inventory. ACE provided exactly what I needed with their business storage units. The 24/7 access is perfect for my unpredictable schedule.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'College Student',
      quote: 'I needed affordable storage during summer break, and ACE had the perfect solution. The online booking process was simple, and I love how clean and secure the facility is. Highly recommend!',
      rating: 4,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Robert Chen',
      role: 'Vintage Car Collector',
      quote: 'The vehicle storage at ACE is top-notch. My classic cars have been perfectly protected from the elements, and the security gives me peace of mind. The staff even helps me with maintenance suggestions.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [active]);
  
  const nextTestimonial = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>
        </div>
        
        <div className="testimonials-carousel">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="testimonial-card"
            >
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-quote">{testimonials[active].quote}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonials[active].rating ? 'star active' : 'star'}
                    />
                  ))}
                </div>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonials[active].image} alt={testimonials[active].name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonials[active].name}</h4>
                  <p className="author-role">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="carousel-controls">
            <button className="prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
              &#8592;
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === active ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button className="next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials