import { Link } from 'react-router-dom'
import useSplittingAnimation from '../../hooks/useSplittingAnimation'
import './footerHome.scss'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'

function FooterHome() {
    useSplittingAnimation('.slide-vertical');

	return (
        <footer className='undefFooter'>
            <section className='undefFooterBottom'>
                <p data-splitting className='undefLinkFirst slide-vertical'>
                    <span>В проект вложена</span><br />
                    <span>частичка моей души</span>
                </p>
                <Link to='https://t.me/StarflowDesign' className='contactMeMain'>
            <section className='mainFooterP'><img className='leftArrow' src={arrowLeft} alt='arrow' />написать в телеграм<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
            </Link>
                <ul className='showLink'>
                    <Link className='ul_link' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                    <Link className='ul_link' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
                    <Link className='ul_link' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
                </ul>
            <Link 
            data-splitting 
            className='undefLinkSecond slide-vertical' 
            to='https://github.com/p1baby' 
            target="_blank" 
            rel="noopener noreferrer">
                <span>Верстка сайта</span><br />
                <span>@p1baby</span>
            </Link>
            </section>
        </footer>
	);
}

export default FooterHome;