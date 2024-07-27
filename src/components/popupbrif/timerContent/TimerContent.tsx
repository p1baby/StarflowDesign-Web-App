import { forwardRef } from 'react'
import useTimer from '../../hooks/useTimer'
import './timercontent.scss'
import arrowLeft from '/arrowBlackL.svg'
import arrowRight from '/arrowBlackR.svg'

interface TimerContentProps {
  handleDrawerClose: () => void;
}

const TimerContent = forwardRef<HTMLElement, TimerContentProps>(({ handleDrawerClose }, ref) => {
  const { elapsedTime, timerActive } = useTimer(0);

  return (
    <article className='drawerThird' ref={ref}>
      <header>
        <p className='popupTextThird'>Пожалуйста, подождите,<br />пока закончится таймер</p>
      </header>
      <main>
        {timerActive && (
          <p className='timer'>
            {`${String(Math.floor((5 * 60 - elapsedTime / 1000) / 60)).padStart(2, '0')}:${String(
              Math.floor((5 * 60 - elapsedTime / 1000) % 60)
            ).padStart(2, '0')}`}
          </p>
        )}
      </main>
      <footer>
        <p className='footerFormText'>После завершения отсчета, Вы<br />снова сможете заполнить бриф</p>
        <button onClick={handleDrawerClose} className='closeButton2'>
          <img className='leftArrow' src={arrowLeft} alt='arrow' />
          Закрыть
          <img className='rightArrow' src={arrowRight} alt='arrow' />
        </button>
      </footer>
    </article>
  );
});

export default TimerContent;
