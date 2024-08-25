import { useEffect, useState } from 'react'
import Splitting from 'splitting'
import useSplittingOnLoad from '../../components/hooks/useSplittingOnLoad.tsx'
import Curve from '../../components/layoutTransition/index.tsx'
import NavigationButtons from '../../components/navigationButtons/NavigationButtons.tsx'
import './home.scss'

function Home() {
	const [isVisible, setIsVisible] = useState(false);

	useSplittingOnLoad('.slide-vertical');

	useEffect(() => {
		// Apply Splitting.js to the desired elements
		Splitting({ target: '.homeText p' });
	
		// Delay setting visibility
		setTimeout(() => {
			setIsVisible(true);
		}, 5000); // Adjust delay as needed
	}, []);

	return (
		<Curve>
			<section className='homeSection'>
			<h1 data-splitting className='slide-vertical'><span className='firText'>Star<span className='ligatures'>fl</span><span className='owFollowing'>ow</span></span><span className='secText'> Design</span></h1>
				<section className='welcomeUnder'>
					<span className='bracket1'>(</span>
					<p className='navbarText'>
						Открыт для любого<br />сотрудничества и предложений
					</p>
					<span className='bracket2'>)</span>
				</section>
				<NavigationButtons/>
				<article className='homeText'>
					<p className={`${isVisible ? 'visible' : ''}`} data-splitting>
						<span className='char'>Эмпатичный дизайнер, стремлюсь</span><br /><span className='char'>сделать ваш бренд понятным</span><br /><span className='char'>и выделяющимся</span>
                    </p>
                    <p className={`${isVisible ? 'visible' : ''}`} data-splitting>
                        <span className='char'>Моя цель —  создание эффектных,</span><br /><span className='char'>и эффективных решений</span><br /><span className='char'>для вашего бизнеса</span>
                    </p>
				</article>
			</section>
		</Curve>
	);
}

export default Home;

