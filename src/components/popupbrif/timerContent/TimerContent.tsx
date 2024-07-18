import React from 'react';
import arrowLeft from '/arrowBlackL.svg';
import arrowRight from '/arrowBlackR.svg';
import useTimer from '../../hooks/useTimer';
import { RefObject } from 'react';
import './timercontent.scss'

interface TimerContentProps {
  ref: RefObject<HTMLElement>;
  handleDrawerClose: () => void;
}

const TimerContent: React.FC<TimerContentProps> = ({ ref, handleDrawerClose }) => {
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
};

export default TimerContent;
