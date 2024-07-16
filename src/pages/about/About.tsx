import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../../components/aboutMe/AboutMe';
import './about.scss';

import PopupBrif from '../../components/popupbrif/PopupBrif';

const About = () => {
	const [brifOpened, setBrifOpened] = React.useState(false);
	
	const handleOpenPopup = () => {
		setBrifOpened(true);
	};
	return(
		<>
		{brifOpened && <PopupBrif onClose={() => setBrifOpened(false)} selectedService={null} /> }
		<section className='aboutSection'>
			<section className='aboutIntro'>
				<h1><span className='firText'>Привет,</span><span className='secText'>Я Игорь</span></h1>
				<article className='homeText'>
					<p>Эмпатичный дизайнер, стремлюсь<br></br>сделать ваш бренд понятным<br></br>и выделяющимся</p>
					<p>Моя цель — объединить эстетику,<br></br>функциональность и значимость<br></br>в единое целое</p>
				</article>
				<section className='aboutFooter'>
					<Link to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Резюме CV</Link>
					<a onClick={handleOpenPopup}>Принципы</a>
				</section>
			</section>
			<AboutMe/>
			<section className='trump'>
				<section className='textMain'>
					<h2>Дизайн - это моя жизнь<br></br>Ваш успех - это моя задача</h2> 
				</section>
				<section className='textBottom'>
					<p className='textBfirst'>Горю своим делом, вдохновляюсь<br></br>возможностью улучшения жизни других<br></br>людей с помощью дизайна и получаю<br></br>от этого безграничное удовольствие.</p>
					<p className='textBsecond'>Сочетаю эстетичный дизайн с удобством,<br></br>постоянно совершенствую свои навыки,<br></br>чтобы ваш бизнес засиял также ярко,<br></br>как звёзды в ночном небе.</p>
				</section>
			</section>
		</section>
		</>
	)
}

export default About;