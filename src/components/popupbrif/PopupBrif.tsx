import { useOutsideClick } from '../popupbrif/outsideClick/useOutsideClick';

import { sendMessage } from '../../api/telegram';
import { form } from './validation/Validation';
import useTimer from '../hooks/useTimer';

import { useState, useEffect } from 'react';


import './popupbrif.scss';
import SuccessContent from './successContent/SuccessContent';
import TimerContent from './timerContent/TimerContent';

interface Props {
  onClose: () => void;
  selectedService: string | null;
}

function PopupBrif(props: Props) {
  const { ref } = useOutsideClick(props.onClose);
  const [selectedProjectType, setSelectedProjectType] = useState<string | null>(null);
  const [selectedProjectBudget, setSelectedProjectBudget] = useState<string | null>(null);
  const [showDefaultContent, setShowDefaultContent] = useState(false);
  const [showSuccessContent, setShowSuccessContent] = useState(true);
  const [showThirdContent, setShowThirdContent] = useState(false);
  const { elapsedTime, startTimer, stopTimer, timerActive } = useTimer(0);

  useEffect(() => {
    setSelectedProjectType(projectButtons.find(button => button.id === props.selectedService)?.value || null);
}, [props.selectedService]);

  useEffect(() => {
    const storedShowThirdContent = localStorage.getItem('showThirdContent');
    if (storedShowThirdContent === 'true') {
      setShowThirdContent(true);
      setShowDefaultContent(false);
      setShowSuccessContent(false);
      startTimer();
    }
  }, [startTimer]);

  useEffect(() => {
    if (showThirdContent) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [showThirdContent, startTimer, stopTimer]);

		const projectButtons = [
			{ id: '1', title: 'Одностраничный сайт', value: 'Одностраничный сайт' },
			{ id: '2', title: 'Корпоративный сайт', value: 'Корпоративный сайт'},
			{ id: '3', title: 'Интернет-магазин', value: 'Интернет-магазин'},
			{ id: '4', title: 'Дизайн в Figma',  value: 'Дизайн в Figma'},
		];
		
		const projectBudget = [
			{ id: '1', title: 'Менее 50к', value: 'Менее 50к' },
			{ id: '2', title: '50к-80к', value: '50-80к' },
			{ id: '3', title: '80к-120к', value: '80к-120к' },
			{ id: '4', title: 'Более 120к', value: 'Более 120к'},
		];


  const handleFormSubmit = async ({ name, contacts, projectType, projectBudget, projectDetails, projectLink }: typeof form.values) => {
    try {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Yekaterinburg',
      };
      const formatter = new Intl.DateTimeFormat('ru-RU', options);
      const formattedTime = formatter.format(date);

      const message = `⚠️ НОВЫЙ ЗАКАЗ от ${formattedTime}⚠️\n\nИмя клиента: ${name},\nКонтакт: ${contacts},\nТип проекта: ${projectType},\nБюджет проекта: ${projectBudget},\nДетали проекта:\n${projectDetails}\nСсылка на редизайн: ${projectLink}`;

      await sendMessage(message);
      setShowDefaultContent(false); // Hide default
      setShowSuccessContent(true);
    } catch (e) {
      form.setFieldError('projectLink', e as string);
      console.error('Error', e);
    }
  };

  const handleDrawerClose = () => {
    if (showSuccessContent) {
      setShowSuccessContent(false);
      setShowThirdContent(false);
      localStorage.setItem('showThirdContent', 'true');
      startTimer();
    } else if (showThirdContent) {
      setShowThirdContent(false);
      stopTimer();
      props.onClose(); // Close the drawer when the button is clicked
    }
  };

  return (
    <section className='overlay'>
      {showDefaultContent ? (
        <>
          <article className='drawer' ref={ref}>
            <header>
              <hgroup>
                <h5 className='startText'>Начнём<br />Сотрудничество!</h5>
                <h5 className='startTextSecond'>Начнём Сотрудничество!</h5>
                <button onClick={props.onClose} className='closeButton'><img alt='close' src='/close.svg' /></button>
              </hgroup>
              <hgroup className='horizontalText'>
                <p className='popupText'>Укажите Ваши контакты и<br />расскажите немного о проекте</p>
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
                <div className='buttonsMainT'>
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
                <section className='buttonsMainB'>
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
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
                  <input {...form.getInputProps('projectLink')} className='ownInputSpecial' maxLength={1000} type='text' placeholder='Ссылка на сайт (если нужен редизайн)' />
                  <textarea {...form.getInputProps('projectDetails')} className={`ownTextarea ${form.errors.projectDetails ? 'error' : ''}`} maxLength={3000} placeholder='Напишите, что ещё важно знать о Вашем проекте, цели, задачи**' />
                </div>
                {form.errors.projectDetails && <p className='errorText'>{form.errors.projectDetails}</p>}
              </fieldset>
              <button type='submit' className='submitButton'>Отправить</button>
            </form>
          </article>
        </>
      ) : showSuccessContent ? (
        <SuccessContent ref={ref} handleDrawerClose={handleDrawerClose} />
      ) : (
        <TimerContent ref={ref} handleDrawerClose={handleDrawerClose} />
      )}
    </section>
  );
}

export default PopupBrif;