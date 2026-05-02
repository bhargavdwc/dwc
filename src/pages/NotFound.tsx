import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoImg from '../assets/white_logo.jpg'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logoImg} alt="DWC Logo" className="h-20 w-auto object-contain mb-8 mx-auto" />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-display font-bold text-7xl sm:text-9xl text-[#060B18] mb-4"
      >
        404
      </motion.h1>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-[#060B18]/60 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          data-cursor="button"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-display font-bold px-8 py-4 rounded-full transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Homepage
        </Link>
      </motion.div>
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      </div>
    </div>
  )
}
