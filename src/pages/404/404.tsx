import { Link } from 'react-router-dom';
import NavigationButtonsActive from '../../components/navigationButtonsActive/NavigationButtonsActive.tsx';
import star404 from '/star404.svg';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';
import './404.scss';

function Undefpage() {
	return (
        <>
        <section className='undefSection'>
			<h1><span className='four'>4</span><img alt='star404' src={star404}/><span className='four'>4</span></h1>
			<NavigationButtonsActive/>
			<article className='undefText'>
				<p>Похоже, Вас унесло<br></br>звездным потоком</p>
				<Link to='/' className='undefFooterLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />вернуться на главную<img className='rightArrow' src={arrowRight} alt='arrow' /></Link>
			</article>
		</section>
        </>
	);
}

export default Undefpage;
