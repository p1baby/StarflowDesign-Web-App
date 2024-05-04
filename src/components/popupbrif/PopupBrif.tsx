import './popupbrif.scss';
interface Props {
	onClose: () => void;
}
function PopupBrif(props: Props) {
	
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
				<article className='asideBrif'>
					<header>
						<div>
							<h5 className='startText'>Начнём<br></br>Сотрудничество!</h5>
							<button onClick={props.onClose} className='closeButton'><img alt='close' src='/close.svg' /></button>
						</div>
						<div className='horizontalText'>
							<p className='popupText'>Укажите Ваши контакты и<br></br>расскажите немного о проекте</p>
							<p style={{ color: '#CF9B7D' }} className='popupText'>*Обязательные поля</p>
						</div>
					</header>
					<form>
						<div className='horizontalGround'>
							<p className='popupText'>Ваши контакты</p>
							<div className='inputContact'>
								<input className='ownInput' type='text' name='name' placeholder='Ваше имя*' />
								<input className='ownInput' type='text' name='contacts' placeholder='Telegram или E-mail*' />
							</div>
						</div>
						<div className='horizontalGround'>
							<p className='popupText'>Тип проекта</p>
							<div className='buttonsBudget'>
								{projectButtons.map((project) => (
									<button key={project.id} className='mainButton' value=''>{project.title}</button>
								))}
							</div>
						</div>
						<div className='horizontalGround'>
							<p className='popupText'>Бюджет проекта (в рублях)*</p>
							<div className='buttonsBudget'>
								{projectBudget.map((project) => (
									<button key={project.id} className='mainButton' value=''>{project.title}</button>
								))}
							</div>
						</div>
						<div className='verticalGround'>
							<p className='popupText'>Детали проекта</p>
							<textarea className='ownTextarea' maxLength={5000} name='details' placeholder='Telegram или E-mail*' />
							<input className='ownInput' type='text' name='contacts' placeholder='Сссылка на сайт (если есть)' />
						</div>
						<button className='submitButton'>Отправить</button>
					</form>
				</article>
			</section>
		);
}

export default PopupBrif;