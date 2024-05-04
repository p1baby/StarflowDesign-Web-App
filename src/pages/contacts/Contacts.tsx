import React from 'react'
import { Link } from 'react-router-dom'
import NavigationButtonsActive from '../../components/navigationButtonsActive/NavigationButtonsActive.tsx'
import './contacts.scss'
import PopupBrif from '../../components/popupbrif/PopupBrif.tsx'

function Contacts() {
	const [brifOpened, setBrifOpened] = React.useState(false);
	
	const handleOpenPopup = () => {
		setBrifOpened(true);
	};
	
	return (
		<section className='contactSection'>
			{brifOpened? <PopupBrif onClose={() => setBrifOpened(false)} /> : null}
			<h2><span className='firText'>Давайте</span><span className='secText'> Сотрудничать</span></h2>
			<NavigationButtonsActive />
			<article className='contactText'>
				<Link to='https://t.me/StarflowDesign' target='_blank' rel='noopener noreferrer' className='contactButtons'>
					<p>СВЯЗАТЬСЯ<br></br>СО МНОЙ</p>
					<span className='discription'>( телеграм )</span>
					<img className='contactLight' alt='light' src='/contactLight.svg' />
				</Link>
				<a onClick={handleOpenPopup} className='contactButtons'>
					<p>ЗАПОЛНИТЬ<br></br>БРИФ</p>
					<span className='discription'>( небольшой )</span>
					<img className='contactLight' alt='light' src='/contactLight.svg' />
				</a>
			</article>
		</section>
	);
}

export default Contacts;