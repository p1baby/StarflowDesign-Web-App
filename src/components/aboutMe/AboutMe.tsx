import './aboutme.scss';

const AboutMe = () => {

	return (
		<section className='aboutMeSection'>
            <p className='textTop'>Убежден в том, что хороший дизайн важен<br></br>не только для пользовательского опыта, но<br></br>и для имиджа бренда.</p>
            <section className='textMain'>
                <p>(Обо мне)</p>
                <h1>Я люблю продуманный дизайн. Стремлюсь к понятности, простоте и эстетике. Пробую современные визуальные решения. Каждая моя работа — это вызов самому себе.</h1>
            </section>
            <p className='textBottom'>Я верю, что лучшие работы получаются на<br></br>стыке эмоций и ясности, сочетая в себе не только эстетику, но и удобство.</p>
        </section>
		)
	}

export default AboutMe;