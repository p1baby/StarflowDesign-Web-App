import { Link } from 'react-router-dom';
import logo from '/logoSV.svg';
import './openBurger.scss'

const openBurger = () => {
	return(
		<>
        <header className='headerMenu'>
            <p className='headerBtn'> <img src={logo} alt='logo' />Starflow<br></br>Design</p>
        </header>
        <section className='burgerContent'>
            <nav>
                <Link className='navLink' to='/projects'>Проекты</Link>
                <Link className='navLink' to='/services'>Услуги</Link>
                <Link className='navLink' to='/about'>Обо мне</Link>
                <Link className='navLink' to='/contacts'>Контакты</Link>
            </nav>
            <article>
				<Link to='https://t.me/StarflowDesign' target='_blank' rel='noopener noreferrer' className='contactButtons'>
					<p>СВЯЗАТЬСЯ<br></br>СО МНОЙ</p>
					<span className='discription'>( телеграм )</span>
					<img className='contactLight' alt='light' src='/contactLight.svg' />
				</Link>
				<a className='contactButtons'>
					<p>ЗАПОЛНИТЬ<br></br>БРИФ</p>
					<span className='discription'>( небольшой )</span>
					<img className='contactLight' alt='light' src='/contactLight.svg' />
				</a>
			</article>
            <ul>
                <Link className='portfolioLink' to='https://www.behance.net/StarflowDesign' target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                <Link className='portfolioLink' to='https://dprofile.ru/starflowdesign' target="_blank" rel="noopener noreferrer">DPROFILE</Link>
                <Link className='portfolioLink' to='https://dribbble.com/StarflowDesign' target="_blank" rel="noopener noreferrer">DRIBBLE</Link>
            </ul>
            <footer>
                <Link className='footerLinkFirst' to='mailto:starflowdesign@gmail.com' target="_blank" rel="noopener noreferrer">Рабочая почта<br />starflowdesign@gmail.com</Link>
                <Link className='footerLinkSecond' to='https://github.com/p1baby' target="_blank" rel="noopener noreferrer">Верстка сайта<br />@p1baby</Link>
            </footer>
        </section>
		</>
	)
}

export default openBurger;