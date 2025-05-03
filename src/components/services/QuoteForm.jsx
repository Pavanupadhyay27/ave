import { useState } from 'react'
import { motion } from 'framer-motion'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    requirements: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Quote requested:', formData)
  }

  return (
    <motion.div 
      className="quote-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>Request a Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        {/* Add other form fields */}
        <button type="submit" className="btn-primary">Get Quote</button>
      </form>
    </motion.div>
  )
}

export default QuoteForm
