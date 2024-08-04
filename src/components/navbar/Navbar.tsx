import { createContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import logo from '/logoSV.svg'

import OpenBurger from './openBurger/openBurger'

export const BurgerContext = createContext<React.Dispatch<React.SetStateAction<boolean>> | undefined>(undefined);

const Navbar = () => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
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

	return (
		<nav className='navbarSection'>
			<Link className='navbarBtn' to='/'>
				<img src={logo} alt='logo' ref={logoRef} />
				Starflow<br></br>Design
			</Link>
			<section className='burger' onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
				<span></span>
				<span></span>
			</section>
			<section className={isBurgerOpen ? 'openBurger' : 'closeBurger'}>
				{isBurgerOpen ? (
					<BurgerContext.Provider value={setIsBurgerOpen}>
						<OpenBurger />
					</BurgerContext.Provider>
				) : null}
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
	);
};

export default Navbar;
