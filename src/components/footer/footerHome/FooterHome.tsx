import { Link } from 'react-router-dom';
import './footerHome.scss';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';

function FooterHome() {
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

export default FooterHome;