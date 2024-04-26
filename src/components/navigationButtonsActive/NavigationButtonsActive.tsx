import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './navigationbuttonsactive.scss'

function NavigationButtonsActive() {
	
	const linksMain = [
		{id: '1', number: '00-1', title: 'Проекты', link: '/projects'},
		{id: '2', number: '00-2', title: 'Услуги', link: '/services'},
		{id: '3', number: '00-3', title: 'Обо мне', link: '/about'},
		{id: '4', number: '00-4', title: 'Контакты', link: '/contacts'},
	];
	
	const [isVisible, setIsVisible] = useState(true);
	
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(false);
				} else {
					setIsVisible(true);
				}
			});
		});
		
		const footer = document.querySelector('.footer');
		if (footer) {
			observer.observe(footer);
		}
		
		return () => {
			if (footer) {
				observer.unobserve(footer);
			}
		};
	}, []);
	
	return (
		<section className='navigationSection' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.9s' }}>
			{linksMain.map((link) => (
				<div key={link.id}>
					<p className='upperText'>{link.number}</p>
					<Link className='navigationLink' to={`${link.link}`}>{link.title}</Link>
				</div>
			))}
			<p className='navigationText'>©2024</p>
		</section>
	);
}

export default NavigationButtonsActive;
