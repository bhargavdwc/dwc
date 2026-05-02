import Hero from '../components/home/Hero'
import LogoMarquee from '../components/home/LogoMarquee'
import AboutSnippet from '../components/home/AboutSnippet'
import ClientLogos from '../components/home/ClientLogos'
import Stats from '../components/home/Stats'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import ContactForm from '../components/home/ContactForm'
import FAQ from '../components/home/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoMarquee />
      <AboutSnippet />
      <ClientLogos />
      <Stats />
      <Services />
      <Testimonials />
      <ContactForm />
      <FAQ />
    </main>
  )
}
