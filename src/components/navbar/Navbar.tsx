import { AnimatePresence, motion } from 'framer-motion'
import { createContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import logo from '/logoSV.svg'

import { burgerAnimation } from '../animations/modals'
import useSplittingAnimation from '../hooks/useSplittingAnimation'
import OpenBurger from './openBurger/openBurger'

export const BurgerContext = createContext<React.Dispatch<React.SetStateAction<boolean>> | undefined>(undefined);

const Navbar = () => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const logoRef = useRef<HTMLImageElement>(null);
	const [shouldHideNavbar, setShouldHideNavbar] = useState(false);

	useEffect(() => {
		const checkVisibility = () => {
			const isDrawerVisible = document.querySelector('.drawer, .drawerSecond, .drawerThird');
			setShouldHideNavbar(!!isDrawerVisible);
		};
		checkVisibility();

		const observer = new MutationObserver(checkVisibility);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => observer.disconnect();
	}, []);

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

	useEffect(() => { // Hook to run the effect when the component mounts
        const checkOpenBurger = () => { // Function to check if the navbar has the 'openBurger' class
            const navbar = document.querySelector('.navbar') as HTMLElement; // Select the navbar element
            if (navbar) { // If the navbar element exists
                if (navbar.classList.contains('openBurger')) { // If the navbar has the 'openBurger' class
                    navbar.style.mixBlendMode = 'difference'; // Set the mix-blend-mode to 'difference'
                } else { // If the navbar does not have the 'openBurger' class
                    navbar.style.mixBlendMode = 'normal'; // Set the mix-blend-mode to 'normal'
                }
            }
        };
        document.addEventListener('DOMContentLoaded', checkOpenBurger); // Add event listener for DOMContentLoaded to run checkOpenBurger
        document.addEventListener('click', checkOpenBurger); // Add event listener for click to run checkOpenBurger
    
        return () => { // Cleanup function to remove event listeners when the component unmounts
            document.removeEventListener('DOMContentLoaded', checkOpenBurger); // Remove DOMContentLoaded event listener
            document.removeEventListener('click', checkOpenBurger); // Remove click event listener
        };
    }, []); // Empty dependency array to run the effect only once when the component mounts

	useSplittingAnimation('.slide-vertical');

	return (
		<nav className={`navbarSection ${shouldHideNavbar ? 'hidden' : ''}`}>
			<Link className='navbarBtn' to='/' onClick={() => setIsBurgerOpen(false)}>
				<img src={logo} alt='logo' ref={logoRef} />
				Starflow<br></br>Design
			</Link>
			<section 
				className={`burger ${isBurgerOpen ? 'burgerActive' : ''}`} 
				onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
				<span></span>
				<span></span>
			</section>
			<AnimatePresence mode="wait">
				{isBurgerOpen && (
				<motion.section 
					variants={burgerAnimation}
					initial="initial"
					animate="enter"
					exit="exit"
					className='openBurger'>
					<BurgerContext.Provider value={setIsBurgerOpen}>
						<OpenBurger />
					</BurgerContext.Provider>
				</motion.section>
				)}
      		</AnimatePresence>
			<section className='welcome'>
				<span className='bracket1'>(</span>
				<p className='navbarText'>Открыт для любого<br></br>сотрудничества и предложений</p>
				<span className='bracket2'>)</span>
			</section>
			<Link
			data-splitting
			className="navbarTelegram slide-vertical"
			to="https://t.me/StarflowDesign"
			target="_blank"
			rel="noopener noreferrer">
			<span>Написать в</span><br />
			<span>телеграм</span>
		</Link>
		</nav>
	);
};

export default Navbar;
