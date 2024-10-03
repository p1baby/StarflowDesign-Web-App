import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Splitting from 'splitting'
import useSplittingHover from '../../components/hooks/useSplittingHover.tsx'
import useSplittingOnLoad from '../../components/hooks/useSplittingOnLoad.tsx'
import Curve from '../../components/layoutTransition/index.tsx'
import NavigationButtons from '../../components/navigationButtons/NavigationButtons.tsx'
import PopupBrif from '../../components/popupbrif/PopupBrif.tsx'
import './contacts.scss'

function Contacts() {
	const [brifOpened, setBrifOpened] = useState(false);
	const [visibleLines, setVisibleLines] = useState<number[]>([]);
	
	const handleOpenPopup = () => {
		setBrifOpened(true);
	};

	useSplittingOnLoad('.slide-vertical');
	useSplittingHover();

	useEffect(() => {
        Splitting({ target: '.contactButtons p' });
        
        const initialDelay = 3800; // delay for first string
        const subsequentDelay = 100; // delay beetween strings

        const lines = document.querySelectorAll('.contactButtons p');
        lines.forEach((line, index) => {
            const delay = initialDelay + subsequentDelay * index;
            setTimeout(() => {
                setVisibleLines(prev => [...prev, index]);
            }, delay);
        });
    }, []);

	return (
		<Curve>
			<section className='contactSection'>
				<AnimatePresence mode='wait'>
					{brifOpened && <PopupBrif onClose={() => setBrifOpened(false)} selectedService={null} /> }
				</AnimatePresence>
				<h1 data-splitting className='slide-vertical'><span className='firText'>Давайте</span><span className='secText'> Сотрудничать</span></h1>
				<h1 className='second'><span className='firText'>Давайте</span><br></br><span className='secText'>Сотрудничать</span></h1>
				<NavigationButtons />
				<article className='contactText'>
					<section>
						<Link data-splitting to='https://t.me/StarflowDesign' target='_blank' rel='noopener noreferrer' className='contactButtons'>
							<p className={visibleLines.includes(0) ? 'visible' : ''} data-splitting>
								<span className='char'>СВЯЗАТЬСЯ</span>
							</p>
							<p className={visibleLines.includes(1) ? 'visible' : ''} data-splitting>
								<span className='char'>СО МНОЙ</span>
							</p>
							<span className='discription'>( телеграм )</span>
							<img className='contactLight' alt='light' src='/contactLight.svg' />
						</Link>
					</section>
					{/* <Link data-splitting to='https://t.me/StarflowDesign' target='_blank' rel='noopener noreferrer' className='contactButtons'>
						<p>СВЯЗАТЬСЯ<br></br>СО МНОЙ</p>
						<span className='discription'>( телеграм )</span>
						<img className='contactLight' alt='light' src='/contactLight.svg' />
					</Link> */}
					{/* <a data-splitting onClick={handleOpenPopup} className='contactButtons'>
						<p>ЗАПОЛНИТЬ<br></br>БРИФ</p>
						<span className='discription'>( небольшой )</span>
						<img className='contactLight' alt='light' src='/contactLight.svg' />
					</a> */}
					<section>
						<a data-splitting onClick={handleOpenPopup} className='contactButtons'>
							<p className={visibleLines.includes(0) ? 'visible' : ''} data-splitting>
								<span className='char'>ЗАПОЛНИТЬ</span>
							</p>
							<p className={visibleLines.includes(1) ? 'visible' : ''} data-splitting>
								<span className='char'>БРИФ</span>
							</p>
							<span className='discription'>(небольшой )</span>
							<img className='contactLight' alt='light' src='/contactLight.svg' />
						</a>
					</section>
				</article>
			</section>
		</Curve>
	);
}

export default Contacts;