import { useState } from 'react';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';
import './services.scss';

import PopupBrif from '../../components/popupbrif/PopupBrif';
import AboutMe from '../../components/aboutMe/AboutMe';

const Services = () => {
	const [brifOpened, setBrifOpened] = useState(false);
	const [selectedService, setSelectedService] = useState<string | null>(null);
	const [activeStage, setActiveStage] = useState<string | null>(null);

	const handleOpenPopup = (id: string) => {
		setSelectedService(id);
		setBrifOpened(true);
	};

	const myServices = [
		{ id: '1', number: '01', title: 'Одностраничный сайт', description: 'Этот формат подойдет для презентации компании, продажи одного товара или услуги.', price: '50 000', deadlines: '5' },
		{ id: '2', number: '02', title: 'Корпоротивный сайт', description: 'Сайт, состоящий из нескольких страниц — отличный вариант для подробной презентации компании в интернете.', price: '65 000', deadlines: '14' },
		{ id: '3', number: '03', title: 'Интернет-магазин', description: 'Отлично подходит для продажи товаров с возможностью подключения онлайн-оплаты, доставки и других виджетов.', price: '65 000', deadlines: '14' },
		{ id: '4', number: '04', title: 'Дизайн в Figma', description: 'Полноценный дизайн-макет сайта с адаптивами, подготовленный к верстке + дизайнерский контроль реализации.', price: '30 000', deadlines: '5' }
	];

	const stages = [
		{ id: '1', number: '01', title: 'Знакомство и брифинг', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: '20-30 минут' },
		{ id: '2', number: '02', title: 'Аналитика, постановка целей и задач', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: '20-30 минут' },
		{ id: '3', number: '03', title: 'Прототипирование', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: '20-30 минут' },
		{ id: '4', number: '04', title: 'Создание дизайн-концепции', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: '20-30 минут' },
		{ id: '5', number: '05', title: 'Дизайн всего сайта и адаптивы', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: '20-30 минут' },
		{ id: '6', number: '06', title: 'Верстка сайта и дизайнерский контроль', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: '20-30 минут' },
		{ id: '7', number: '07', title: 'Передача готового сайта', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: '20-30 минут' }
	];

	return(
		<>
		{brifOpened && <PopupBrif selectedService={selectedService} onClose={() => setBrifOpened(false)} />}
		<section className='servicesSection'>
			<article className='servicesText'>
				<p>Эмпатичный дизайнер, стремлюсь<br></br>сделать ваш бренд понятным и<br></br>выделяющимся</p>
				<h2><span className='firText'>Мои</span><span className='secText'> Услуги</span></h2>
				<p>Моя цель — объединить эстетику,<br></br>функциональность и значимость в<br></br>единое целое</p>
			</article>
			{/*<NavigationButtonsActive />*/} 
			<main className='mainServices'>
			{myServices.map((services) => (
				<section className='service'>
							<section className='top'>
								<p className='number'>({services.number})</p>
								<h3 className='title'>{services.title}</h3>
							</section>
							<button onClick={() => handleOpenPopup(services.id)}  className='serviceButton'>
								<section className='insideButton'><img className='leftArrow' src={arrowLeft} alt='arrow' />заказать<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
							</button>
							<section className='bottom'>
								<p className='description'>{services.description}</p>
								<div>
									<p className='price'>от {services.price} ₽</p>
									<p className='deadlines'>от {services.deadlines}-ти дней</p>
								</div>
							</section>
				</section>
			))}
			</main>
			<AboutMe/>
			<section className='serviceStages'>
			<p style={{ marginBottom: '32px' }}>( Этапы сотрудничества )</p>
			<ul id='accordion'>
			{stages.map((stage) => (
				<li key={stage.id}>
					<label htmlFor={stage.id} onClick={() => setActiveStage(stage.id === activeStage ? null : stage.id)}>
						<p>({stage.number})</p>{stage.title}
						<img src={stage.id === activeStage ? '/public/accordionMinus.svg' : '/public/accordionPlus.svg'} alt='toggle' />
					</label>
					<input type="radio" id={stage.id} name="accordion" />
					<section className='accordionContent'>
					{stage.description.map((line, index) => (
						<p key={index} className='description'>{line}</p>
					))}
						<p className='time'>Займет {stage.time}</p>
					</section>
				</li>
			))}
			</ul>
			</section>
		</section>
		</>
	)
}
export default Services;
