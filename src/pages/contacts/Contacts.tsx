import React from 'react'
import { Link } from 'react-router-dom'
import NavigationButtons from '../../components/navigationButtons/NavigationButtons.tsx'
import PopupBrif from '../../components/popupbrif/PopupBrif.tsx'
import './contacts.scss'

function Contacts() {
	const [brifOpened, setBrifOpened] = React.useState(false);
	
	const handleOpenPopup = () => {
		setBrifOpened(true);
	};
	
	return (
		<section className='contactSection'>
			{brifOpened && <PopupBrif onClose={() => setBrifOpened(false)} selectedService={null} /> }
			<h1><span className='firText'>Давайте</span><span className='secText'> Сотрудничать</span></h1>
			<h1 className='second'><span className='firText'>Давайте</span><br></br><span className='secText'>Сотрудничать</span></h1>
			<NavigationButtons />
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