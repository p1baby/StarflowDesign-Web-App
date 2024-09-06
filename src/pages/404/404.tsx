import { Link } from 'react-router-dom'
import NavigationButtons from '../../components/navigationButtons/NavigationButtons.tsx'
//import star404 from '/star404.svg';
import useSplittingOnLoad from '../../components/hooks/useSplittingOnLoad.tsx'
import Curve from '../../components/layoutTransition/index.tsx'
import './404.scss'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'

function Undefpage() {

	useSplittingOnLoad('.slide-vertical');
	
	return (
        <Curve>
        <section className='undefSection'>
					<h1 data-splitting className='slide-vertical'>
						<span className='firText'>Страница</span>
						<span className='secText'> не найдена</span>
					</h1>
					<h1 className='second'><span className='firText'>Страница</span><br></br><span className='secText'>не найдена</span></h1>
					<NavigationButtons/>
					<Link
					data-splitting
					to='/' 
					className='undefText'
					>
						<p>Похоже, Вас унесло<br></br>звездным потоком</p>
						<section className='undefFooterLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />вернуться на главную<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
					</Link>
			</section>
        </Curve>
	);
}

export default Undefpage;
