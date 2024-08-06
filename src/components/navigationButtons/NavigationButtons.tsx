import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navigationbuttons.scss'

function NavigationButtons() {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (currentScrollY + windowHeight >= docHeight) {
        setIsHidden(false);
      } else if (currentScrollY > prevScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const linksMain = [
    { id: '1', number: '00-1', title: 'Проекты', link: '/projects' },
    { id: '2', number: '00-2', title: 'Услуги', link: '/services' },
    { id: '3', number: '00-3', title: 'Обо мне', link: '/about' },
    { id: '4', number: '00-4', title: 'Контакты', link: '/contacts' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const navElement = document.querySelector('.navigationSection') as HTMLElement;
        if (navElement) {
          navElement.style.mixBlendMode = entry.isIntersecting ? 'normal' : 'difference';
        }
      },
      { threshold: 0.5 }
    );

    const targetElement = document.querySelector('.aboutIntro');
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // задержка
  }, []);

  return (
    <section className={`navigationSection ${isHidden ? 'hidden' : ''} ${isVisible ? 'visible' : ''}`}>
      {linksMain.map((link) => (
        <Link to={`${link.link}`} onClick={() => window.scrollTo(0, 0)} key={link.id}>
          <p className='upperText'>{link.number}</p>
          <p className='navigationLink'>
            {link.title}
          </p>
        </Link>
      ))}
      <p className='navigationText'>©2024</p>
    </section>
  );
}

export default NavigationButtons;