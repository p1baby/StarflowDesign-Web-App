import React from 'react'
import { useLocation } from 'react-router-dom'
import './aboutme.scss'

const AboutMe = () => {
    const location = useLocation();
    const isServicesPage = location.pathname === '/services';

	return (
		<section className='aboutMeSection'>
            <p className='textTop'>Убежден в том, что хороший дизайн важен<br></br>не только для пользовательского опыта,<br></br>но и для имиджа бренда.</p>
            <section className='textMain'>
                <p>{isServicesPage ? '( Мой подход )' : '( Обо мне )'}</p>
                {isServicesPage ? (
                <h3>Разделяю большие и сложные задачи<br></br>на самодостаточные и прозрачные этапы,<br></br>чтобы клиент всегда знал, как движется<br></br>его проект.</h3>
                ) : (
                    <React.Fragment>
                        <h3>Я люблю продуманный дизайн. Стремлюсь<br></br>к понятности, простоте и эстетике.<br></br>Пробую современные визуальные решения.<br></br>Каждая моя работа — это вызов самому себе.</h3>
                        <h3>Я люблю продуманный дизайн. Стремлюсь к понятности, простоте и эстетике. Пробую современные визуальные решения. Каждая моя работа — это вызов самому себе.</h3>                    
                    </React.Fragment>
                )}      
            </section>
            <p className='textBottom'>Я верю, что лучшие работы получаются на стыке<br></br>эмоций и ясности, сочетая в себе не только<br></br>эстетику, но и удобство.</p>
        </section>
		)
	}

export default AboutMe;