import { Link } from 'react-router-dom'
import logo from '/logo.svg'
import './navbar.scss'

const Navbar = () => {
	return (
		<nav className='navbarSection'>
			<Link className='navbarBtn' to='/'> <img src={logo} alt='logo' /> Starflow<br></br>Design</Link>
			<div className='welcome'>
				<span className='bracket1'>(</span>
				<p className='navbarText'>
					Открыт для любого<br></br>сотрудничества и предложений
				</p>
				<span className='bracket2'>)</span>
			</div>
			<Link className='navbarTelegram' to='https://t.me/StarflowDesign' target='_blank' rel='noopener noreferrer'>Написать
				в<br></br> телеграм</Link>
		</nav>
	)
}

export default Navbar