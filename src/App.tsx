import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import ScrollProgress from './components/common/ScrollProgress'
import PageWrapper from './components/common/PageWrapper'
import BackToTop from './components/common/BackToTop'
import useLenis from './hooks/useLenis'
import SplashCursor from './components/ui/SplashCursor'

import About from './pages/About'
import Services from './pages/Services'
import ServiceSEO from './pages/ServiceSEO'
import ServiceSMM from './pages/ServiceSMM'
import ServicePPC from './pages/ServicePPC'
import ServiceMeta from './pages/ServiceMeta'
import ServiceLinkedIn from './pages/ServiceLinkedIn'
import Projects from './pages/Projects'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash)
      if (targetElement) {
        setTimeout(() => {
          if ((window as any).lenis) {
            ;(window as any).lenis.scrollTo(targetElement, { duration: 1.2 })
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
        return
      }
    }
    
    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])
  return null
}

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
      <Route path="/services/search-engine-optimization" element={<PageWrapper><ServiceSEO /></PageWrapper>} />
      <Route path="/services/social-media-marketing" element={<PageWrapper><ServiceSMM /></PageWrapper>} />
      <Route path="/services/pay-per-click-ppc" element={<PageWrapper><ServicePPC /></PageWrapper>} />
      <Route path="/services/meta-ads" element={<PageWrapper><ServiceMeta /></PageWrapper>} />
      <Route path="/services/linkedin-marketing" element={<PageWrapper><ServiceLinkedIn /></PageWrapper>} />
      <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
      <Route path="/insights" element={<PageWrapper><Insights /></PageWrapper>} />
      <Route path="/insights/:slug" element={<PageWrapper><InsightDetail /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
    </Routes>
  )
}

function App() {
  useLenis()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SplashCursor />
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
