import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import arrowLeft from '/arrowLeft.svg';
import arrowRight from '/arrowRight.svg';

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
          return '/projects';
        default:
          return '/'; // If the current page does not match the expected ones, we will go to the main page
      }
    }

    function getNextPageTitle() {
      switch (getNextPage()) {
        case '/services':
          return 'Услуги';
        case '/about':
          return 'Обо мне';
        case '/projects':
          return 'Проекты';
        default:
          return '';
      }
    }
    
	return (
        <Link to={getNextPage()} className='nextPage'>
        <p>{getNextPageTitle()}</p>
        <section className='nextPageLink'><img className='leftArrow' src={arrowLeft} alt='arrow' />Следующая страница<img className='rightArrow' src={arrowRight} alt='arrow' /></section>
      </Link>
	);
}

export default NextPage;