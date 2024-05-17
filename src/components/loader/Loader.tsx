import { useEffect, useState } from 'react';
import './loader.scss'

const Loader = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((oldPercent) => {
                let newPercent = oldPercent + 4; // Увеличиваем на 4 каждые 25 мс, чтобы достичь 100 за 2,5 секунды
                if (newPercent > 100) {
                    newPercent = 100; // Убедитесь, что процент не превышает 100
                    clearInterval(interval);
                }
                return newPercent;
            });
        }, 25); // Задаем интервал в 25 миллисекунд
    }, []);

    return (
        <section className='loader'>
            <h3>{percent}<span className='procent'>%</span></h3>
        </section>
    )
}

export default Loader;
