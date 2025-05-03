import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import DryPallet from './pages/services/DryPallet'
import CrossDocking from './pages/services/CrossDocking'
import ThreePL from './pages/services/ThreePL'
import OfficeWarehouse from './pages/services/OfficeWarehouse'
import LumperServices from './pages/services/LumperServices'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Locations from './pages/Locations'
import useScrollToTop from './hooks/useScrollToTop'
import ScrollToTop from './components/common/ScrollToTop'
import './App.css'

function App() {
  useScrollToTop();
  
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/dry-pallet" element={<DryPallet />} />
            <Route path="/cross-docking" element={<CrossDocking />} />
            <Route path="/3pl-services" element={<ThreePL />} />
            <Route path="/office-warehouse" element={<OfficeWarehouse />} />
            <Route path="/lumper-services" element={<LumperServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App