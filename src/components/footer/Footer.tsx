import { Link, useLocation } from 'react-router-dom'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'
import NavigationButtonsStatic from './navigationButtonsStatic/NavigationButtonsStatic.tsx'
import './footer.scss'

const Footer = () => {
	const location = useLocation();
	const isHomePageOrContacts = location.pathname === '/' || location.pathname === '/contacts';
	
	if (isHomePageOrContacts) {
		return (
			<footer className='startFooter'>
				<article className='startFooterBottom'>
					<p>В проект вложена<br></br>частичка моей души</p>
					<Link className='footerLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br></br>@p1baby</Link>
				</article>
			</footer>
		)
	}
	
	return (
		<footer className='mainFooter'>
			<p className='mainFooterTop'><span className='difText'>Обсудим</span> Ваш проект</p>
			<Link to='https://t.me/StarflowDesign' className='mainFooterP'><img src={arrowLeft} alt='arrow' />написать в телеграм<img src={arrowRight} alt='arrow' /></Link>
			<NavigationButtonsStatic/>
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