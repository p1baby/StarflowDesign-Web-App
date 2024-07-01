import { Link, useLocation } from 'react-router-dom';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';
import NavigationButtonsStatic from './navigationButtonsStatic/NavigationButtonsStatic.tsx';
import './footer.scss';

import Footer404 from './footer404/Footer404.tsx';
import FooterContacts from './footerContacts/FooterContacts.tsx';
import FooterHome from './footerHome/FooterHome.tsx';

import NextPage from './nextPage/NextPage.tsx';

const Footer = () => {
  const location = useLocation();
  const HomePage = location.pathname === '/';
  const ContactsPage = location.pathname === '/contacts';
  const Page404 = location.pathname === '/404';

  // Home
  if (HomePage) {
    return (
      <FooterHome/>
    );
  }
  // Contacts
  if (ContactsPage) {
    return (
      <FooterContacts/>
    );
  }
  // 404
  if (Page404) {
    return (
      <Footer404/>
    );
  }

  // footer on other pages
	return (
		<footer className='mainFooter'>
      <Link to='https://t.me/StarflowDesign' className='goConversation'>
        <p className='mainFooterTop'><span className='difText'>Обсудим</span> <span className='secText'>Ваш проект</span></p>
        <p className='mainFooterTopSecond'><span className='difText'>Обсудим</span><br></br><span className='secText'>Ваш проект</span></p>
        <div className='mainFooterP'><img className='leftArrow' src={arrowLeft} alt='arrow' />написать в телеграм<img className='rightArrow' src={arrowRight} alt='arrow' /></div>
      </Link>
			<NavigationButtonsStatic/>
			<NextPage />
      <section className='mainFooterBottomSecond'>
        <ul className='showLink'>
					<Link className='ul_link' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
					<Link className='ul_link' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
					<Link className='ul_link' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
				</ul>
        <section className='direct'>
          <Link className='footerLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br></br>starflowdesign@gmail.com</Link>
				  <Link className='footerLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br></br>@p1baby</Link>
        </section>
			</section>
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