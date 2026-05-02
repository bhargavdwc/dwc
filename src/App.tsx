import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Suspense, lazy, useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import ScrollProgress from './components/common/ScrollProgress'
import PageWrapper from './components/common/PageWrapper'
import BackToTop from './components/common/BackToTop'
import useLenis from './hooks/useLenis'
import SplashCursor from './components/ui/SplashCursor'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceSEO = lazy(() => import('./pages/ServiceSEO'))
const ServiceSMM = lazy(() => import('./pages/ServiceSMM'))
const ServicePPC = lazy(() => import('./pages/ServicePPC'))
const ServiceMeta = lazy(() => import('./pages/ServiceMeta'))
const ServiceLinkedIn = lazy(() => import('./pages/ServiceLinkedIn'))
const Projects = lazy(() => import('./pages/Projects'))
const Insights = lazy(() => import('./pages/Insights'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
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
      <Suspense fallback={null}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
