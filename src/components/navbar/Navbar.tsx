import { createContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import logo from '/logoSV.svg'

import OpenBurger from './openBurger/openBurger'

export const BurgerContext = createContext<React.Dispatch<React.SetStateAction<boolean>> | undefined>(undefined);

const Navbar = () => {
	const [isBrugerOpen, setIsBurgerOpen] = useState(false);
	const logoRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
        const handleScroll = () => {
          const rotationSpeed = 0.1;
          if (logoRef.current) {
            logoRef.current.style.transform = `rotate(${window.scrollY * rotationSpeed}deg)`;
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

	return (
		<nav className='navbarSection'>
            <Link className='navbarBtn' to='/'> 
                <img src={logo} alt='logo' ref={logoRef} /> 
                Starflow<br></br>Design
            </Link>
            <section className='burger' 
                onClick={() => {
                    setIsBurgerOpen(!isBrugerOpen);
                }}>
                <span></span>
                <span></span>
            </section>
            <section className={isBrugerOpen ? "openBurger" : "closeBurger"}>
                {isBrugerOpen ? <BurgerContext.Provider value={setIsBurgerOpen}><OpenBurger /></BurgerContext.Provider> : null}
            </section>
                <section className='welcome'>
                    <span className='bracket1'>(</span>
                        <p className='navbarText'>
                            Открыт для любого<br></br>сотрудничества и предложений
                        </p>
                    <span className='bracket2'>)</span>
            	</section>
                <Link className='navbarTelegram' to='https://t.me/StarflowDesign' target='_blank' rel='noopener noreferrer'>
                    Написать в<br></br> телеграм
                </Link>
        </nav>
	)
}

export default Navbar
