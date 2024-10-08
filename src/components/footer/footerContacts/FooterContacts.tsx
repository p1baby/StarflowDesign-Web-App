import React from 'react'
import { Link } from 'react-router-dom'
import useSplittingHover from '../../hooks/useSplittingHover'
import PopupBrif from '../../popupbrif/PopupBrif'
import './footerContacts.scss'

function FooterContacts() {
    const [brifOpened, setBrifOpened] = React.useState(false);

    const handleOpenPopup = () => {
        setBrifOpened(true);
    };
    
    useSplittingHover();

	return (
        <>
        {brifOpened && <PopupBrif onClose={() => setBrifOpened(false)} selectedService={null} /> }
        <footer className='underFooterContacts'>
            <section className='underFooterBottomContacts'>
                <Link data-splitting className='underLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br />starflowdesign@gmail.com</Link>
                <ul className='showLink'>
                    <Link data-splitting className='ul_link' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                    <Link data-splitting className='ul_link' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
                    <Link data-splitting className='ul_link' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
                </ul>
                <Link data-splitting className='underLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br />@p1baby</Link>
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
                        <Link
                        className='footerLinkFirst' 
                        to='mailto:starflowdesign@gmail.com' 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Рабочая почта<br />starflowdesign@gmail.com
                        </Link>
                        <Link 
                        className='footerLinkSecond'
                        to='https://github.com/p1baby' 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Верстка сайта<br />p1baby
                        </Link>
                    </footer>
            </section>
        </footer>
        </>
	);
}

export default FooterContacts;