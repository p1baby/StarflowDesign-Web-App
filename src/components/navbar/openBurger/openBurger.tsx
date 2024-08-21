import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Splitting from 'splitting'
import './openBurger.scss'

import { useContext } from 'react'
import { BurgerContext } from '../Navbar'


import { AnimatePresence } from 'framer-motion'
// import { FadeText } from '../../animations/fadeTextBurger'
import PopupBrif from '../../popupbrif/PopupBrif'

const openBurger = () => {
    const setIsBurgerOpen = useContext(BurgerContext);
    const [brifOpened, setBrifOpened] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const contextClick = () => {
        if (setIsBurgerOpen) {
            setIsBurgerOpen(false);
        }
    };
	
	const handleOpenPopup = () => {
		setBrifOpened(true);
	};

    const pageText = {
        '/projects': 'Проекты',
        '/services': 'Услуги',
        '/about': 'Обо мне',
        '/contacts': 'Контакты',
    };

    useEffect(() => {
        // Initialize Splitting.js
        const results = Splitting();
        console.log(results); // Debug: See what elements are affected by Splitting.js

        setTimeout(() => {
            setIsVisible(true);
        }, 1000); // delay
    }, []);

    return (
        <>
            <AnimatePresence mode='wait'>
                {brifOpened && <PopupBrif onClose={() => setBrifOpened(false)} selectedService={null} />}
            </AnimatePresence>
            <section className='burgerContent'>
                <nav>
                    {Object.entries(pageText).map(([path, text]) => (
                        <Link
                            key={path}
                            onClick={contextClick}
                            className={`navLink ${location.pathname === path ? 'italicText' : ''}`}
                            to={path}
                        >
                            <section className={`linkContent ${isVisible ? 'visible' : ''}`} data-splitting>
                                {location.pathname === path && <img src={`/arrowLeft.svg`} alt='Left Image' />}
                                {text}
                                {location.pathname === path && <img src={`/arrowRight.svg`} alt='Right Image' />}
                            </section>
                        </Link>
                    ))}
                </nav>
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
                <ul className={`ulPortfolio ${isVisible ? 'visible' : ''}`}>
                    <Link className='portfolioLink' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                    <Link className='portfolioLink' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
                    <Link className='portfolioLink' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
                </ul>
                <footer>
                    <Link className='footerLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br />starflowdesign@gmail.com</Link>
                    <ul className={`links ${isVisible ? 'visible' : ''}`}>
                        <Link className='portfolioLink' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                        <Link className='portfolioLink' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
                        <Link className='portfolioLink' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
                    </ul>
                    <Link className='footerLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br />@p1baby</Link>
                </footer>
            </section>
        </section>
		</>
	)
}

export default openBurger;