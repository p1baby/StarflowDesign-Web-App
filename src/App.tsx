import { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Services from './pages/services/Services';
import Page404 from './pages/404/404';
import './styles/variables.scss';
import './styles/default.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import { TransitionProvider } from './components/contextGsap/TransitionContext';
{/*import Transition from './components/transitionGsap/TransitionComponent'; */} 

import { Navbar, Footer, Loader } from './components';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const App: FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent: FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, [])

  return (
    <TransitionProvider>
        <>
        {loading ? <Loader/> : <section className='wrapper'>
          <section className="navbar">
            <Navbar />
          </section>
          <section className="content">
          {/* <Transition> */} 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/404" element={<Page404/>} />
            </Routes>
          {/*</Transition>*/} 
          </section>
          <section className="footer">
            <Footer />
          </section>
          </section>
        }
        </>
    </TransitionProvider>
  );
}

export default App;
