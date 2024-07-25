import './successcontent.scss'
import arrowLeft from '/arrowBlackL.svg'
import arrowRight from '/arrowBlackR.svg'

interface SuccessContentProps {
    handleDrawerClose: () => void; // Specify the type for 'handleDrawerClose'
  }

  function SuccessContent({handleDrawerClose }: SuccessContentProps) {

	return (
      <article className='drawerSecond'>
          <header>
            <p className='popupTextSecond'>Вместе мы сделаем что-то<br />по истине крутое</p>
          </header>
          <main>
            <h6 className='successMessage'>Спасибо! Ваша заявка<br />получена!</h6>
          </main>
          <footer>
            <p className='footerFormText'>Я изучу бриф и свяжусь с Вами<br />в ближайшее время</p>
            <button onClick={handleDrawerClose} className='closeButton2'><img className='leftArrow' src={arrowLeft} alt='arrow' />Закрыть<img className='rightArrow' src={arrowRight} alt='arrow' /></button>
          </footer>
        </article>
	);
}

export default SuccessContent;