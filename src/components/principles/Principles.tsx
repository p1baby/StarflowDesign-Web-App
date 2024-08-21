import React, { useEffect, useState } from 'react'
import ParallaxText from '../animations/velocity'
import FooterPrinciples from '../footer/footerPrinciples/FooterPrinciples'
import Navbar from '../navbar/Navbar'
import './principles.scss'

interface PrinciplesProps {
    handlePrinciplesShow: () => void;
}

const Principles: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Запускаем анимацию появления при монтировании компонента
    }, []);

    const handleClose = () => {
        setIsVisible(false); // Запускаем анимацию исчезновения
        setTimeout(() => {
            handlePrinciplesShow(); // Вызываем callback после завершения анимации
        }, 500); // Время совпадает с длительностью анимации в CSS
    };

    return (
        <section className={`principlesSection ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
            <Navbar />
            <section className='principlesShow'>
                <section className='marquee'>
                    <ParallaxText baseVelocity={-5}>Современность / Удобство / Понятность / Эстетика /</ParallaxText>
                    <span className='principlesLine'></span>
                    <ParallaxText baseVelocity={5}>Новизна / Эффективность / Эмпатия / Качество /</ParallaxText>
                    <span className='principlesLine'></span>
                    <ParallaxText baseVelocity={-5}>Результат / Чистота / Эмоция / Функциональность /</ParallaxText>
                </section>
            </section>
            <FooterPrinciples handlePrinciplesShow={handleClose} />
        </section>
    );
};

export default Principles;
// const words = [
//   ['Современность', 'Удобство', 'Понятность', 'Эстетика'],
//   ['Новизна', 'Эффективность', 'Эмпатия', 'Качество'],
//   ['Результат', 'Чистота', 'Эмоция', 'Функциональность']
// ];
// import FooterPriciples from '../footer/footerPrinciples/FooterPrinciples';
// import { VelocityScroll } from '../magicui/velocity';
// import Navbar from '../navbar/Navbar';
// import './principles.scss';

// interface PrinciplesProps {
//   handlePrinciplesShow: () => void;
// }

// const Principles: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
//   return (
//     <section className='principlesSection'>
//       <Navbar />
//       <section className='principlesShow'>
//         <div className='marquee'>
//           <VelocityScroll
//             text="Современность Удобство Понятность Эстетика"
//             default_velocity={10}
//             className="marquee-content"
//           />
//           <VelocityScroll
//             text="Новизна Эффективность Эмпатия Качество"
//             default_velocity={10}
//             className="marquee-content"
//           />
//           <VelocityScroll
//             text="Результат Чистота Эмоция Функциональность"
//             default_velocity={10}
//             className="marquee-content"
//           />
//         </div>
//       </section>
//       <FooterPriciples handlePrinciplesShow={handlePrinciplesShow} />
//     </section>
//   );
// }

// export default Principles;