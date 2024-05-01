import NavigationButtonsActive from '../../components/navigationButtonsActive/NavigationButtonsActive.tsx'
import './contacts.scss'

function Contacts() {
	return (
		<section className='contactSection'>
			<h2><span className='firText'>Давайте</span><span className='secText'> Сотрудничать</span></h2>
			<NavigationButtonsActive />
		</section>
	);
}

export default Contacts;