import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import arrowLeft from '/arrowLeft.svg'
import arrowRight from '/arrowRight.svg'

function NextPage() {
    const location = useLocation();
    const [currentPage] = useState(location.pathname);

    function getNextPage() {
        switch (currentPage) {
            case '/projects':
            return '/services';
        case '/services':
            return '/about';
        case '/about':
            return '/contacts';
        default:
            return '/'; // if current page undefind => home
        }
    }

    function getNextPageTitle() {
        switch (getNextPage()) {
            case '/services':
            return 'Услуги';
        case '/about':
            return 'Обо мне';
        case '/contacts':
            return 'Контакты';
        default:
            return '';
        }
    }
    
    
	return (
        <Link to={getNextPage()} className='nextPage'>
            <p style={{ fontSize: '80px' }}>{getNextPageTitle()}</p>
            <section className='nextPageLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />Следующая страница<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
        </Link>
	);
}

export default NextPage;