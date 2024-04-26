import { Link } from 'react-router-dom'
import logo from '/logo.svg'
import './navbar.scss'

const Navbar = () => {
	return (
		<section className='navbarSection'>
			<Link className='navbarBtn' to='/'> <img src={logo} alt='logo'/> Starflow<br></br>Design</Link>
			<p className='navbarText'>
				Открыт для любого<br></br>сотрудничества и предложений
			</p>
			<Link className='navbarTelegram' to='https://t.me/StarflowDesign' target="_blank" rel="noopener noreferrer">Написать в<br></br> телеграм</Link>
		</section>
	)
}

export default Navbar