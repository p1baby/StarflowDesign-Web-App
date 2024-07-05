{/* import NavigationButtonsActive from '../../components/navigationButtonsActive/NavigationButtonsActive.tsx';*/} 
import React from 'react';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';
import './services.scss';

import PopupBrif from '../../components/popupbrif/PopupBrif';

const Services = () => {
	const [brifOpened, setBrifOpened] = React.useState(false);

	const handleOpenPopup = () => {
		setBrifOpened(true);
	};
		const myServices = [
			{ id: '1', number: '01', title: 'Одностраничный сайт', description: 'Этот формат подойдет для презентации компании, продажи одного товара или услуги.', price: '50 000', deadlines: '5' },
			{ id: '2', number: '02', title: 'Корпоротивный сайт', description: 'Сайт, состоящий из нескольких страниц — отличный вариант для подробной презентации компании в интернете.', price: '65 000', deadlines: '14' },
			{ id: '3', number: '03', title: 'Интернет-магазин', description: 'Отлично подходит для продажи товаров с возможностью подключения онлайн-оплаты, доставки и других виджетов.', price: '65 000', deadlines: '14' },
			{ id: '4', number: '04', title: 'Дизайн в Figma', description: 'Полноценный дизайн-макет сайта с адаптивами, подготовленный к верстке + дизайнерский контроль реализации.', price: '30 000', deadlines: '5' },
		];

		return(
			<>
			{brifOpened && <PopupBrif onClose={() => setBrifOpened(false)} /> }
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
								<button onClick={handleOpenPopup} className='serviceButton'>
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
			</section>
			</>
		)
	}
export default Services;