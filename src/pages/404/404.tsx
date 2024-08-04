import { Link } from 'react-router-dom'
import NavigationButtons from '../../components/navigationButtons/NavigationButtons.tsx'
//import star404 from '/star404.svg';
import './404.scss'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'

function Undefpage() {
	return (
        <>
        <section className='undefSection'>
					<h1><span className='firText'>Страница</span><span className='secText'> не найдена</span></h1>
					<h1 className='second'><span className='firText'>Страница</span><br></br><span className='secText'>не найдена</span></h1>
					<NavigationButtons/>
					<Link to='/' className='undefText'>
						<p>Похоже, Вас унесло<br></br>звездным потоком</p>
						<section className='undefFooterLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />вернуться на главную<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
					</Link>
			</section>
        </>
	);
}

export default Undefpage;
