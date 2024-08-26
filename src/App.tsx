import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Page404 from './pages/404/404'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Services from './pages/services/Services'
import './styles/default.scss'
import './styles/variables.scss'

import { AnimatePresence } from 'framer-motion'

import { Footer, Navbar } from './components'

const App: FC = () => {
  return (
    <Router>
        <AppContent />
    </Router>
  );
}

const AppContent: FC = () => {
    const location = useLocation();

  return (
    <>
        <section className='wrapper'>
                {/* <video autoPlay muted loop id='background-video'>
                    <source src='back.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video> */}
            <section className="navbar">
                <Navbar />
            </section>
            <section className="content">
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/404" element={<Page404 />} />
                    </Routes>
                </AnimatePresence>
            </section>
            <section className="footer">
                <Footer />
            </section>
        </section>
    </>
  );
}

export default App;
