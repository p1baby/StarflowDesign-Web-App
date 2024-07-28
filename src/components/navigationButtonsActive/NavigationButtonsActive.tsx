import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navigationbuttonsactive.scss'

function NavigationButtonsActive() {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

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

  return (
    <section className={`navigationSection ${isHidden? 'hidden' : ''}`}>
      {linksMain.map((link) => (
        <article key={link.id}>
          <p className='upperText'>{link.number}</p>
          <Link className='navigationLink' to={`${link.link}`} onClick={() => window.scrollTo(0, 0)}>{link.title}</Link>
        </article>
      ))}
      <p className='navigationText'>©2024</p>
    </section>
  );
}

export default NavigationButtonsActive;
