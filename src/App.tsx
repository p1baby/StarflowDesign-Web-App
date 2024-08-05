import { FC, useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Page404 from './pages/404/404'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Services from './pages/services/Services'
import './styles/default.scss'
import './styles/variables.scss'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Footer, Loader, Navbar } from './components'
import { TransitionProvider } from './components/contextGsap/TransitionContext'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const App: FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent: FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
          setLoading(false);
      }, 7000); // Загрузка длится 7 секунд

      return () => clearTimeout(timer);
  }, [location]);

  return (
    <TransitionProvider>
      <>
        {loading ? <Loader isLoading={loading} /> : (
          <section className='wrapper'>
            <section className="navbar">
              <Navbar />
            </section>
            <section className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/404" element={<Page404 />} />
              </Routes>
            </section>
            <section className="footer">
              <Footer />
            </section>
          </section>
        )}
      </>
    </TransitionProvider>
  );
}

export default App;
