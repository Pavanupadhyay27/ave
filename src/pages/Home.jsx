import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
  useEffect(() => {
    document.title = 'ACE Storage Solution - Secure Storage for Every Need'
  }, [])

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CallToAction />
    </>
  )
}

export default Home