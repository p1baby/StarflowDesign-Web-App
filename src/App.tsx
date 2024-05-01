import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts';
import Home from './pages/home/Home';
import './styles/variables.scss';
import './styles/default.scss'

import { Navbar, Footer } from './components';
import Projects from './pages/projects/Projects'
import Services from './pages/services/Services'

const App: FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


const AppContent: FC = () => {
  const location = useLocation();
  const isHomePage: boolean = location.pathname === '/';
  
  
  let backgroundColor: string = '#0f0f0f';
  if (isHomePage) {
    backgroundColor = '#5C5DA1';
  }
  
  return (
    <section className='wrapper' style={{ backgroundColor: backgroundColor }}>
      <section className="navbar">
        <Navbar />
      </section>
      <section className="content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </section>
  );
}

export default App;
