/* eslint-disable no-mixed-spaces-and-tabs */
import {useOutsideClick} from '../popupbrif/outsideClick/useOutsideClick'
import { useForm } from '@mantine/form';
import { sendMessage } from '../../api/telegram';
import { useState} from 'react';

import './popupbrif.scss';

interface Props {
	onClose: () => void;
}
function PopupBrif(props: Props) {
	const { ref } = useOutsideClick(props.onClose);

	const [selectedProjectType, setSelectedProjectType] = useState<string | null>(null);
	const [selectedProjectBudget, setSelectedProjectBudget] = useState<string | null>(null);


	const form = useForm({
	  mode: 'uncontrolled',
	  initialValues: {
		name: '',
    	contacts: '',
		projectType: '',
		projectBudget: '',
    	projectDetails: '',
    	projectLink: '',
	  },
  
	  validate: {
		name: (value) => {
			if (!value || value.trim() === '') return 'Введите ваше имя';
			return /^[\p{L} ]{1,32}$/u.test(value) ? null : 'Только буквы и не длиннее 32 символов';
		},
		contacts: (value) => {
			if (!value || value.trim() === '') return 'Введите ваши контакты';
			if (/^@?[a-zA-Z0-9_]{5,32}$/.test(value)) return null;
			if (/^[a-zA-Z0-9._%+-]+@(gmail\.com|vk\.com|mail\.ru|rambler\.ru|yandex\.ru|outlook\.com|yahoo\.com|mailfence\.com|protonmail\.com)$/.test(value)) return null;
			return 'Введите действительный адрес эл. почты или имя пользователя в Telegram';
		},
		projectBudget: (value) => {
			if (!value) return 'Выберите бюджет проекта';
			return null;
		},
		projectDetails: (value) => {
			if (!value) return 'Заполните данные проекта';
			return null;
		},
	  },
	});

	const projectButtons = [
		{ id: '1', title: 'Одностраничный сайт', value: 'Одностраничный сайт' },
		{ id: '2', title: 'Корпоративный сайт', value: 'Корпоративный сайт'},
		{ id: '3', title: 'Интернет-магазин', value: 'Интернет-магазин'},
		{ id: '4', title: 'Другое',  value: 'другое'},
	];
	
	const projectBudget = [
		{ id: '1', title: 'Менее 30к', value: 'Менее 30к' },
		{ id: '2', title: '30к-60к', value: '30-60к' },
		{ id: '3', title: '60к-100к', value: '60-100к' },
		{ id: '4', title: 'Более 100к', value: 'Более 100к'},
	];

	const handleFormSubmit = async ({ name, contacts, projectType, projectBudget, projectDetails, projectLink }: typeof form.values) => {
		try {
		  const date = new Date();
		  
		  const options: Intl.DateTimeFormatOptions = {
			year: "2-digit",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZone: "Asia/Yekaterinburg",
		  };
		  const formatter = new Intl.DateTimeFormat("ru-RU", options);
		  const formattedTime = formatter.format(date);
	  
		  const message = `⚠️ НОВЫЙ ЗАКАЗ от ${formattedTime}⚠️\n\nИмя клиента: ${name},\nКонтакт: ${contacts},\nТип проекта: ${projectType},\nБюджет проекта: ${projectBudget},\nДетали проекта:\n${projectDetails}\nСсылка на редизайн: ${projectLink}`;
	  
		  await sendMessage(message);
		} catch (e) {
		  form.setFieldError('projectLink', e as string);
		}
	  }
	
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
							<p style={{ color: '#B4B4B4' }} className='popupText'>*Обязательные поля</p>
						</hgroup>
					</header>
					<form onSubmit={form.onSubmit(handleFormSubmit)}>
						<fieldset className='horizontalGround'>
							<p className='popupText'>Ваши контакты</p>
							<fieldset className='inputContact'>
							<div>
								<input {...form.getInputProps('name')} className={`ownInput ${form.errors.name ? 'error' : ''}`} type='text' placeholder='Ваше имя*' />
								{form.errors.name && <p className='errorText'>{form.errors.name}</p>}
							</div>
							<div>
								<input {...form.getInputProps('contacts')} className={`ownInput ${form.errors.name ? 'error' : ''}`} type='text' placeholder='Telegram или E-mail*' />
								{form.errors.contacts && <p className='errorText'>{form.errors.contacts}</p>}
							</div>
							</fieldset>
						</fieldset>
						<fieldset className='horizontalGround'>
							<p className='popupText'>Тип проекта</p>
							<div className='buttonsMain'>
							{projectButtons.map((project) => (
								<button
								key={project.id}
								className={`mainButtonT ${selectedProjectType === project.value ? 'selected' : ''}`}
								type='button'
								onClick={() => {
									form.setFieldValue('projectType', project.value);
									setSelectedProjectType(project.value);
								}}>
								{project.title}
								</button>
							))}
							</div>
						</fieldset>
						<fieldset className='horizontalGround'>
							<p className='popupText'>Бюджет проекта (в рублях)*</p>
							<section className='buttonsMain'>
							{projectBudget.map((project) => (
								<button
								key={project.id}
								className={`mainButtonB ${selectedProjectBudget === project.value ? 'selected' : ''}`}
								type='button'
								onClick={() => {
									form.setFieldValue('projectBudget', project.value);
									setSelectedProjectBudget(project.value);
								}}>
								{project.title}
								</button>
							))}
							</section>
							{form.errors.projectBudget && <p className='errorText2'>{form.errors.projectBudget}</p>}
						</fieldset>
						<fieldset className='verticalGroundLast'>
							<p className='popupText'>Детали проекта</p>
							<div style={{gap: '8px', display: 'flex', flexDirection: 'column',}}>
								<input {...form.getInputProps('projectLink')} className='ownInputSpecial' maxLength={1000} type='text' placeholder='Ссылка на сайт (если нужен редизайн)' />
								<textarea {...form.getInputProps('projectDetails')} className={`ownTextarea ${form.errors.projectDetails ? 'error' : ''}`} maxLength={3000} placeholder='Напишите, что ещё важно знать о Вашем проекте, цели, задачи**' />
							</div>
							{form.errors.projectDetails && <p className='errorText'>{form.errors.projectDetails}</p>}
						</fieldset>
						<button type='submit' className='submitButton'>Отправить</button>
					</form>
				</article>
			</section>
		);
}

export default PopupBrif;