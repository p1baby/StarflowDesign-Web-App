import { Link } from 'react-router-dom';
import NavigationButtonsActive from '../../components/navigationButtonsActive/NavigationButtonsActive.tsx';
//import star404 from '/star404.svg';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';
import './404.scss';

function Undefpage() {
	return (
        <>
        <section className='undefSection'>
			<h1>404</h1>
			<NavigationButtonsActive/>
			<Link to='/' className='undefText'>
				<p>Похоже, Вас унесло<br></br>звездным потоком</p>
				<section className='undefFooterLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />вернуться на главную<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
			</Link>
		</section>
        </>
	);
}

export default Undefpage;
