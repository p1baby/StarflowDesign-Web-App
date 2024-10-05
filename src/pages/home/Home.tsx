import { useEffect, useState } from 'react'
import Splitting from 'splitting'
import useSplittingOnLoad from '../../components/hooks/useSplittingOnLoad.tsx'
import Curve from '../../components/layoutTransition/index.tsx'
import NavigationButtons from '../../components/navigationButtons/NavigationButtons.tsx'
import './home.scss'

function Home() {
    const [visibleLines, setVisibleLines] = useState<number[]>([]);

    useSplittingOnLoad('.slide-vertical');

    useEffect(() => {
        Splitting({ target: '.homeText p' });
        
        const initialDelay = 3800; // delay for first string
        const subsequentDelay = 100; // delay beetween strings

        const lines = document.querySelectorAll('.homeText p');
        lines.forEach((_line, index) => {
            const delay = initialDelay + subsequentDelay * index;
            setTimeout(() => {
                setVisibleLines(prev => [...prev, index]);
            }, delay);
        });
    }, []);

    return (
        <Curve>
            <section className='homeSection'>
                <h1 data-splitting className='slide-vertical'>
                    <span className='firText'>Star<span className='ligatures'>fl</span><span className='owFollowing'>ow</span></span>
                    <span className='secText'> Design</span>
                </h1>
                <section className='welcomeUnder'>
                    <span className='bracket1'>(</span>
                    <p className='navbarText'>
                        Открыт для любого<br />сотрудничества и предложений
                    </p>
                    <span className='bracket2'>)</span>
                </section>
                <NavigationButtons/>
                <article className='homeText'>
					<section>
						<p className={visibleLines.includes(0) ? 'visible' : ''} data-splitting>
							<span className='char'>Эмпатичный дизайнер, стремлюсь</span>
						</p>
						<p className={visibleLines.includes(1) ? 'visible' : ''} data-splitting>
							<span className='char'>сделать ваш бренд понятным</span>
						</p>
						<p className={visibleLines.includes(2) ? 'visible' : ''} data-splitting>
							<span className='char'>и выделяющимся</span>
						</p>
					</section>

					<section>
						<p className={visibleLines.includes(0) ? 'visible' : ''} data-splitting>
							<span className='char'>Моя цель — создание эффектных</span>
						</p>
						<p className={visibleLines.includes(1) ? 'visible' : ''} data-splitting>
							<span className='char'>и эффективных решений</span>
						</p>
						<p className={visibleLines.includes(2) ? 'visible' : ''} data-splitting>
							<span className='char'>для вашего бизнеса</span>
						</p>
					</section>
                </article>
            </section>
        </Curve>
    );
}

export default Home;
