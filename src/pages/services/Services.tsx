import { useState } from 'react'

import accordionMinus from '/accordionMinus.svg'
import accordionPlus from '/accordionPlus.svg'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'

import './services.scss'

import AboutMe from '../../components/aboutMe/AboutMe'
import PopupBrif from '../../components/popupbrif/PopupBrif'
// import NavigationButtonsActive from '../../components/navigationButtonsActive/NavigationButtonsActive';

const Services = () => {
	const [brifOpened, setBrifOpened] = useState(false);
	const [selectedService, setSelectedService] = useState<string | null>(null);
	  

	const handleOpenPopup = (id: string) => {
		setSelectedService(id);
		setBrifOpened(true);
	};

	const handleToggleAccordion = (index: number) => {
		const updatedStates = [...accordionStates];
		updatedStates[index] = !updatedStates[index];
		setAccordionStates(updatedStates);
		setTimeout(() => {
		  updatedStates[index] = false;
		  setAccordionStates(updatedStates);
		}, 100); // time for swaping + and -
	  };
	  
	const myServices = [
		{ id: '1', number: '01', title: 'Одностраничный сайт', description: 'Сайт для компаний, которым нужно протестировать гипотезу, продукт или создать сайт-визитку. ', price: '50 000', deadlines: '5' },
		{ id: '2', number: '02', title: 'Корпоротивный сайт', description: 'Сайт для бизнесов, которым нужно более подробно рассказать о себе, продукте, услугах, команде.', price: '65 000', deadlines: '14' },
		{ id: '3', number: '03', title: 'Интернет-магазин', description: 'Сайт для продажи товаров с онлайн-оплатой, доставкой и управлением каталогами.', price: '65 000', deadlines: '14' },
		{ id: '4', number: '04', title: 'Дизайн в Figma', description: 'Полноценный дизайн-макет сайта с адаптивами, подготовленный к верстке + дизайнерский контроль.', price: '30 000', deadlines: '5' }
	];

	const stages = [
		{ id: '1', number: '01', title: 'Знакомство и брифинг', description: ['Созвонимся, познакомимся и обсудим детали проекта,', 'чтобы я мог оценить стоимость и сроки.'], time: 'Займет 20-30 минут' },
		{ id: '2', number: '02', title: 'Анализ и структура', description: ['На этом этапе я изучаю целевую аудиторию, анализирую', 'рынок и конкурентов, составляю грамотную структуру,', 'чтобы предложить вам наиболее выигрышный вариант' , 'реализации сайта'], time: 'От 2-х дней' },
		{ id: '3', number: '03', title: 'Референсы и прототип', description: ['Я собираю все ваши пожелания по сайту, подбираю', 'качественные референсы, которые мы вместе и', 'утверждаем. После чего переходим к созданию прототипа.'], time: 'От 2-х дней' },
		{ id: '4', number: '04', title: 'Создание дизайн-концепции', description: ['Дизайню 1-3 ключевые страницы, в которых я', 'прорабатываю визуал будущего сайта. Этот этап помогает', 'найти общее виденье и создать грамотную концепцию.'], time: 'От 3-х дней' },
		{ id: '5', number: '05', title: 'Дизайн всего сайта и адаптивы', description: ['Отрисовываю весь сайт целиком, включая внутренние', 'страницы и их состояния в согласованном стиле. Рисую', 'адаптивные версии.'], time: 'От 4-х дней' },
		{ id: '6', number: '06', title: 'Верстка и дизайнерский контроль', description: ['После согласования дизайна, мы переходим к верстке', 'и выбираем, каким способом будет реализован сайт.', 'Я контролирую весь процесс, чтобы все было именно так,', 'как мы задумали.'], time: 'От 4-х дней' },
		{ id: '7', number: '07', title: 'Передача готового сайта и поддержка', description: ['Передаю вам все доступы и файлы сайта.'], time: '1 месяц поддержки сайта' }
	];

	const [accordionStates, setAccordionStates] = useState(
		stages.map(() => false)
	  );

	return(
		<>
		{brifOpened && <PopupBrif selectedService={selectedService} onClose={() => setBrifOpened(false)} />}
		<section className='servicesSection'>
			<article className='servicesText'>
				<p>создаю продуманный дизайн,<br></br>сочетающий в себе эмоцию,<br></br>эстетику и удобство</p>
				<h2><span className='firText'>Мои</span><span className='secText'> Услуги</span></h2>
				<p>К каждому проекту подхожу<br></br>как к собственному, всегда<br></br>выкладываюсь на  максимум</p>
			</article>
			{/* <NavigationButtonsActive /> */}
			<main className='mainServices'>
			{myServices.map((services) => (
				<section className='service service-hover'>
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
				<ul className='accordion'>
					{stages.map((stage, index) => (
					<li key={stage.id} style={{ borderBottom: accordionStates[index] ? '1px solid white' : '1px solid #1F1F1F' }}>
						<input type='radio' name='accordion' id={stage.id} onChange={() => handleToggleAccordion(index)}/>
						<label htmlFor={stage.id}>
							<p>({stage.number})</p>
							{stage.title}
							<img src={accordionStates[index] ? accordionMinus : accordionPlus} alt='toggle'/>
							</label>
						<section className='content'>
						{stage.description.map((line, index) => (
							<p key={index} className='description'>
							{line}
							</p>
						))}
							<p className='time'>{stage.time}</p>
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
