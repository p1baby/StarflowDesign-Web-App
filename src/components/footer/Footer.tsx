import { Link, useLocation } from 'react-router-dom'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'
import NavigationButtonsStatic from './navigationButtonsStatic/NavigationButtonsStatic.tsx'
import './footer.scss'

const Footer = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	
	if (isHomePage) {
		return (
			<section className='startFooter'>
				<div className='startFooterBottom'>
					<p>В проект вложена<br></br>частичка моей души</p>
					<Link className='navbarTelegram' to='https://t.me/pavlovdeveloper' target="_blank" rel="noopener noreferrer">Верстка сайта<br></br>@pavlovdeveloper</Link>
				</div>
			</section>
		)
	}
	
	return (
		<section className='mainFooter'>
			<p className='mainFooterTop'><span className='difText'>Обсудим</span> Ваш проект</p>
			<Link to='https://t.me/StarflowDesign' className='mainFooterP'><img src={arrowLeft} alt='arrow' />НАПИСАТЬ В
				ТЕЛЕГРАМ<img src={arrowRight} alt='arrow' /></Link>
			<NavigationButtonsStatic/>
			<div className='mainFooterBottom'>
				<Link className='footerLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br></br>starflowdesign@gmail.com</Link>
				<div className='showLink'>
					<Link className='footerLink' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
					<Link className='footerLink' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
					<Link className='footerLink' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
				</div>
				<Link className='footerLinkSecond' to='https://t.me/pavlovdeveloper' target="_blank" rel="noopener noreferrer">Верстка
					сайта<br></br>@pavlovdeveloper</Link>
			</div>
		</section>
	)
}

export default Footer;