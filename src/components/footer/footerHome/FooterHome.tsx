import { Link } from 'react-router-dom'
import './footerHome.scss'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'

import useSplittingHover from '../../hooks/useSplittingHover'


function FooterHome() {

    useSplittingHover();

    return (
        <footer className='underFooter'>
            <section className='underFooterBottom'>
                <p className='underLinkFirst'>
                    В проект вложена<br />частичка моей души
                </p>
                <Link to='https://t.me/StarflowDesign' className='contactMeMain'>
                    <section className='mainFooterP'>
                        <img className='leftArrow' src={arrowLeft} alt='arrow' />
                        написать в телеграм
                        <img className='rightArrow' src={arrowRight} alt='arrow' />
                    </section>
                </Link>
                <ul className='showLink'>
                    <Link data-splitting className='ul_link' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                    <Link data-splitting className='ul_link' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
                    <Link data-splitting className='ul_link' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBBLE</Link>
                </ul>
                <Link 
                    data-splitting
                    className="underLinkSecond"
                    to='https://github.com/p1baby' 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    Верстка сайта<br />@p1baby
                </Link>
            </section>
        </footer>
    );
}

export default FooterHome;