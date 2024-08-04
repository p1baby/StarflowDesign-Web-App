import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AboutMe from '../../components/aboutMe/AboutMe'
import Principles from '../../components/principles/Principles'
import './about.scss'

import NavigationButtons from '../../components/navigationButtons/NavigationButtons'

const About = () => {
    const [principlesShow, setPrinciplesShow] = React.useState(false);
    const imageRef = useRef<HTMLDivElement>(null);
    
    const handlePrinciplesShow = () => {
        setPrinciplesShow(!principlesShow);
    };

		useEffect(() => { //функция для отключения overflow во время того как открыто то или иное модальное окно
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
	
    return(
        <>
        {principlesShow && <Principles handlePrinciplesShow={handlePrinciplesShow}/> }
		<section className='aboutSection'>
			<section className='aboutIntro' ref={imageRef}>
				<h1><span className='firText'>Привет,</span><span className='secText'>Я Игорь</span></h1>
				<article className='homeText'>
					<p>Эмпатичный дизайнер с искренним<br></br>подходом, страстно увлеченный<br></br>своим любимым делом</p>
					<p>Моя цель — объединить эстетику,<br></br>функциональность и значимость<br></br>в единое целое</p>
				</article>
				<NavigationButtons />
				<section className='aboutFooter'>
					<Link to='https://dprofile.ru/starflowdesign/cv' target="_blank" rel="noopener noreferrer">Резюме CV</Link>
					<a onClick={handlePrinciplesShow}>Принципы</a>
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
			</>
	)
}

export default About;