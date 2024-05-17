import { useEffect, useRef } from 'react';
import './popupbrif.scss';

export const useOutsideClick = (callback: () => void) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)){
				callback()
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		};
	}, [callback]);
	return{ref};
};

interface Props {
	onClose: () => void;
}
function PopupBrif(props: Props) {
	const { ref } = useOutsideClick(props.onClose);

	const projectButtons = [
		{ id: '1', title: 'Одностраничный сайт', },
		{ id: '2', title: 'Корпоративный сайт', },
		{ id: '3', title: 'Интернет-магазин', },
		{ id: '4', title: 'Другое', },
	];
	
	const projectBudget = [
		{ id: '1', title: 'Менее 30к', },
		{ id: '2', title: '30к-60к', },
		{ id: '3', title: '60к-100к', },
		{ id: '4', title: 'Более 100к', },
	];

		return (
			<section className='overlay'>
				<article className='drawer' ref={ref}>
					<header>
						<hgroup>
							<h5 className='startText'>Начнём<br></br>Сотрудничество!</h5>
							<button onClick={props.onClose} className='closeButton'><img alt='close' src='/close.svg' /></button>
						</hgroup>
						<hgroup className='horizontalText'>
							<p className='popupText'>Укажите Ваши контакты и<br></br>расскажите немного о проекте</p>
							<p style={{ color: '#CF9B7D' }} className='popupText'>*Обязательные поля</p>
						</hgroup>
					</header>
					<form>
						<fieldset className='horizontalGround'>
							<p className='popupText'>Ваши контакты</p>
							<fieldset className='inputContact'>
								<input className='ownInput' type='text' name='name' placeholder='Ваше имя*' />
								<input className='ownInput' type='text' name='contacts' placeholder='Telegram или E-mail*' />
							</fieldset>
						</fieldset>
						<fieldset className='horizontalGround'>
							<p className='popupText'>Тип проекта</p>
							<div className='buttonsBudget'>
								{projectButtons.map((project) => (
									<button key={project.id} className='mainButton' value=''>{project.title}</button>
								))}
							</div>
						</fieldset>
						<fieldset className='horizontalGround'>
							<p className='popupText'>Бюджет проекта (в рублях)*</p>
							<section className='buttonsBudget'>
								{projectBudget.map((project) => (
									<button key={project.id} className='mainButton' value=''>{project.title}</button>
								))}
							</section>
						</fieldset>
						<fieldset className='verticalGround'>
							<p className='popupText'>Детали проекта</p>
							<textarea className='ownTextarea' maxLength={5000} name='details' placeholder='Telegram или E-mail*' />
							<input className='ownInput' type='text' name='contacts' placeholder='Сссылка на сайт (если есть)' />
						</fieldset>
						<button className='submitButton'>Отправить</button>
					</form>
				</article>
			</section>
		);
}

export default PopupBrif;
