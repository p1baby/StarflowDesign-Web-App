import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AboutMe from '../../components/aboutMe/AboutMe'
import Principles from '../../components/principles/Principles'
import './about.scss'

import Splitting from 'splitting'
import useSplittingHover from '../../components/hooks/useSplittingHover'
import useSplittingOnLoad from '../../components/hooks/useSplittingOnLoad'
import Curve from '../../components/layoutTransition'
import NavigationButtons from '../../components/navigationButtons/NavigationButtons'

const About = () => {
	const [visibleLines, setVisibleLines] = useState<number[]>([]);
    const [principlesShow, setPrinciplesShow] = React.useState(false);
    const imageRef = useRef<HTMLDivElement>(null);
    
    const handlePrinciplesShow = () => {
        setPrinciplesShow(!principlesShow);
    };

		useEffect(() => { // add to body oveflow: hidden whe we see modal's
			if (principlesShow) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		
			return () => {
				document.body.style.overflow = '';
			};
		}, [principlesShow]);

		useEffect(() => { // if we see aboutInro we add mix-blend-mode:normal to .navbar and if we dont see use difference
			const observer = new IntersectionObserver(
					([entry]) => {
							const navbar = document.querySelector('.navbar') as HTMLElement;
							if (navbar) {
									if (entry.isIntersecting) {
											navbar.style.mixBlendMode = 'normal';
									} else {
											navbar.style.mixBlendMode = 'difference';
									}
							}
					},
					{ threshold: 0.06 }
			);

			if (imageRef.current) {
					observer.observe(imageRef.current);
			}

			return () => {
					if (imageRef.current) {
							observer.unobserve(imageRef.current);
					}
			};
	}, []);

	useSplittingOnLoad('.slide-vertical');

	useSplittingHover();

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
	
    return(
        <Curve>
        {principlesShow && <Principles handlePrinciplesShow={handlePrinciplesShow}/> }
		<section className='aboutSection'>
			<section className='aboutIntro' ref={imageRef}>
				<h1 data-splitting className='slide-vertical'><span className='firText'>Привет,</span><span className='secText'>Я Игорь</span></h1>
				<article className='homeText'>
					<section>
						<p className={visibleLines.includes(0) ? 'visible' : ''} data-splitting>
							<span className='char'>Эмпатичный дизайнер с искренним</span>
						</p>
						<p className={visibleLines.includes(1) ? 'visible' : ''} data-splitting>
							<span className='char'>подходом, страстно увлеченный</span>
						</p>
						<p className={visibleLines.includes(2) ? 'visible' : ''} data-splitting>
							<span className='char'>своим любимым делом</span>
						</p>
					</section>

					<section>
						<p className={visibleLines.includes(0) ? 'visible' : ''} data-splitting>
							<span className='char'>Моя цель — объединить эстетику,</span>
						</p>
						<p className={visibleLines.includes(1) ? 'visible' : ''} data-splitting>
							<span className='char'>функциональность и значимость</span>
						</p>
						<p className={visibleLines.includes(2) ? 'visible' : ''} data-splitting>
							<span className='char'>в единое целое</span>
						</p>
					</section>
                </article>
				<NavigationButtons />
				<section className='aboutFooter'>
					<Link 
					data-splitting 
					to='https://dprofile.ru/starflowdesign/cv' 
					target="_blank" 
					rel="noopener noreferrer"
					>
						Резюме CV
					</Link>
					<a
					data-splitting 
					onClick={handlePrinciplesShow}
					>
						Принципы
					</a>
				</section>
			</section>
			<AboutMe/>
			<section className='trump'>
				<section className='textMain'>
					<h2>Дизайн — это моя жизнь<br></br>Ваш успех — это моя цель</h2> 
				</section>
				<section className='textBottom'>
					<p className='textBfirst'>Горю своим делом, вдохновляюсь<br></br>возможностью улучшения жизни других<br></br>людей с помощью дизайна и получаю<br></br>от этого безграничное удовольствие.</p>
					<p className='textBsecond'>Сочетаю эстетичный дизайн с удобством,<br></br>постоянно совершенствую свои навыки,<br></br>чтобы ваш бизнес засиял также ярко,<br></br>как звёзды в ночном небе.</p>
				</section>
				<section className='textBottomMobile'>
					<p className='textBfirst'>Горю своим делом, вдохновляюсь возможностью<br></br>улучшения жизни других людей с помощью дизайна<br></br> и получаю от этого безграничное удовольствие.</p>
					<p className='textBsecond'>Сочетаю эстетичный дизайн с удобством постоянно<br></br>совершенствую свои навыки, чтобы ваш бизнес <br></br>засиял также ярко, как звёзды в ночном небе.</p>
				</section>
			</section>
		</section>
			</Curve>
	)
}

export default About;