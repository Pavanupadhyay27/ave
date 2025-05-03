import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import FeaturedSolutions from '../components/home/FeaturedSolutions'
import Testimonials from '../components/home/Testimonials'
import DeliveryAnimation from '../components/home/DeliveryAnimation'

const Home = () => {
  useEffect(() => {
    document.title = 'ACE Storage Solution - Secure Storage for Every Need'
  }, [])

  return (
    <>
      <Hero />
      <FeaturedSolutions />
      <DeliveryAnimation />
      <Testimonials />
    </>
  )
}

export default Home