import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';
import NavigationButtonsStatic from './navigationButtonsStatic/NavigationButtonsStatic.tsx';
import './footer.scss';

import PopupBrif from '../popupbrif/PopupBrif.tsx';

const Footer = () => {
  const location = useLocation();
  const isHomePageOr404 = location.pathname === '/' || location.pathname === '/404';
  const contacts = location.pathname === '/contacts';

  const [brifOpened, setBrifOpened] = React.useState(false);

  const handleOpenPopup = () => {
    setBrifOpened(true);
  };

  // footer /404 /Home
  if (isHomePageOr404) {
    return (
      <footer className='undefFooter'>
        <section className='undefFooterBottom'>
          <Link className='undefLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br />starflowdesign@gmail.com</Link>
          <Link to='https://t.me/StarflowDesign' className='contactMeMain'>
            <section className='mainFooterP'><img className='leftArrow' src={arrowLeft} alt='arrow' />написать в телеграм<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
          </Link>
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

  // footer /contacts
  if (contacts) {
    return (
      <>
      {brifOpened && <PopupBrif onClose={() => setBrifOpened(false)} /> }
      <footer className='undefFooterContacts'>
        <section className='undefFooterBottomContacts'>
          <Link className='undefLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br />starflowdesign@gmail.com</Link>
          <ul className='showLink'>
            <Link className='ul_link' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
            <Link className='ul_link' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
            <Link className='ul_link' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
          </ul>
          <Link className='undefLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br />@p1baby</Link>
        </section>
        <section className='lowerSection'>
                <article>
                    <Link to='https://t.me/StarflowDesign' target='_blank' rel='noopener noreferrer' className='contactButtons'>
                        <p>СВЯЗАТЬСЯ<br></br>СО МНОЙ</p>
                        <span className='discription'>( телеграм )</span>
                        <img className='contactLight' alt='light' src='/burgerLight.svg' />
                    </Link>
                    <a onClick={handleOpenPopup} className='contactButtons'>
                        <p>ЗАПОЛНИТЬ<br></br>БРИФ</p>
                        <span className='discription'>( небольшой )</span>
                        <img className='contactLight' alt='light' src='/burgerLight.svg' />
                    </a>
                </article>
                <ul className='ulPortfolio'>
                    <Link className='portfolioLink' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                    <Link className='portfolioLink' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
                    <Link className='portfolioLink' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
                </ul>
                <footer>
                    <Link className='footerLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br />starflowdesign@gmail.com</Link>
                    <Link className='footerLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br />@p1baby</Link>
                </footer>
        </section>
      </footer>
      </>
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
      <Link to={getNextPage()} className='nextPage'>
        <p>{getNextPageTitle()}</p>
        <section className='nextPageLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />Следующая страница<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
      </Link>
    );
  }


  // footer on other pages
	return (
		<footer className='mainFooter'>
      <Link to='https://t.me/StarflowDesign' className='goConversation'>
        <p className='mainFooterTop'><span className='difText'>Обсудим</span> <span className='secText'>Ваш проект</span></p>
        <div className='mainFooterP'><img className='leftArrow' src={arrowLeft} alt='arrow' />написать в телеграм<img className='rightArrow' src={arrowRight} alt='arrow' /></div>
      </Link>
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