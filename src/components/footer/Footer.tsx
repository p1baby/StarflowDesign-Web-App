import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';
import NavigationButtonsStatic from './navigationButtonsStatic/NavigationButtonsStatic.tsx';
import './footer.scss';

const Footer = () => {
  const location = useLocation();
  const isHomePageOrContacts = location.pathname === '/' || location.pathname === '/contacts';
  const is404 = location.pathname === '/404';

  // footer /contacts and  /
  if (isHomePageOrContacts) {
    return (
      <footer className='startFooter'>
        <article className='startFooterBottom'>
          <p>В проект вложена<br />частичка моей души</p>
          <Link className='footerLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br />@p1baby</Link>
        </article>
      </footer>
    );
  }

  // footer 404
  if (is404) {
    return (
      <footer className='undefFooter'>
        <section className='undefFooterBottom'>
          <Link className='undefLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br />starflowdesign@gmail.com</Link>
          <ul className='showLink'>
            <Link className='ul_link' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
            <Link className='ul_link' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
            <Link className='ul_link' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
          </ul>
          <Link className='undefLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br />@p1baby</Link>
        </section>
      </footer>
    );
  }

  function NextPage() {
    const location = useLocation();
    const [currentPage] = useState(location.pathname);

    function getNextPage() {
      switch (currentPage) {
        case '/projects':
          return '/services';
        case '/services':
          return '/about';
        case '/about':
          return '/projects';
        default:
          return '/'; // If the current page does not match the expected ones, we will go to the main page
      }
    }

    function getNextPageTitle() {
      switch (getNextPage()) {
        case '/services':
          return 'Услуги';
        case '/about':
          return 'Обо мне';
        case '/projects':
          return 'Проекты';
        default:
          return '';
      }
    }

    return (
      <article className='nextPage'>
        <p>{getNextPageTitle()}</p>
        <Link to={getNextPage()} className='nextPageLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />Следующая страница<img className='rightArrow' src={arrowRight} alt='arrow' /></Link>
      </article>
    );
  }

  // footer on other pages
	return (
		<footer className='mainFooter'>
			<p className='mainFooterTop'><span className='difText'>Обсудим</span> Ваш проект</p>
			<Link to='https://t.me/StarflowDesign' className='mainFooterP'><img className='leftArrow' src={arrowLeft} alt='arrow' />написать в телеграм<img className='rightArrow' src={arrowRight} alt='arrow' /></Link>
			<NavigationButtonsStatic/>
			<NextPage />
			<section className='mainFooterBottom'>
				<Link className='footerLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br></br>starflowdesign@gmail.com</Link>
				<ul className='showLink'>
					<Link className='ul_link' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
					<Link className='ul_link' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
					<Link className='ul_link' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
				</ul>
				<Link className='footerLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br></br>@p1baby</Link>
			</section>
		</footer>
		)
	}

export default Footer;