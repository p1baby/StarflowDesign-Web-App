// hook for countdown in popupbrif
import { useState, useEffect, useRef } from 'react';

const useTimer = (initialTime: number) => {
  const [elapsedTime, setElapsedTime] = useState(initialTime);
  const timerActive = useRef(false);

  useEffect(() => {
    const storedElapsedTime = localStorage.getItem('elapsedTime');
    if (storedElapsedTime) {
      setElapsedTime(parseInt(storedElapsedTime, 10));
    }

    const interval = setInterval(() => {
      if (timerActive.current) {
        setElapsedTime((prevElapsedTime) => {
          const newElapsedTime = prevElapsedTime + 1000;
          localStorage.setItem('elapsedTime', newElapsedTime.toString());
          return newElapsedTime;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startTimer = () => {
    timerActive.current = true;
  };

  const stopTimer = () => {
    timerActive.current = false;
  };

  useEffect(() => {
    if (elapsedTime >= 5 * 60 * 1) {  // 5 minutes timer
      stopTimer();
      localStorage.removeItem('elapsedTime');
      localStorage.removeItem('showThirdContent');
    }
  }, [elapsedTime]);

  return { elapsedTime, startTimer, stopTimer, timerActive: timerActive.current };
};

export default useTimer;
