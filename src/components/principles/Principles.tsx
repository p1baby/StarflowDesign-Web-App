import ParallaxText from '../animation/velocity'
import FooterPrinciples from '../footer/footerPrinciples/FooterPrinciples'
import Navbar from '../navbar/Navbar'
import './principles.scss'
// const words = [
//   ['Современность', 'Удобство', 'Понятность', 'Эстетика'],
//   ['Новизна', 'Эффективность', 'Эмпатия', 'Качество'],
//   ['Результат', 'Чистота', 'Эмоция', 'Функциональность']
// ];

interface PrinciplesProps {
  handlePrinciplesShow: () => void;
}

const Principles: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
  return (
    <section className='principlesSection'>
      <Navbar/>
      <section className='principlesShow'>
          <section className='marquee'>
              <ParallaxText baseVelocity={-5}>Современность / Удобство / Понятность / Эстетика /</ParallaxText>
              <span className='principlesLine'></span>
              <ParallaxText baseVelocity={5}>Новизна    /   Эффективность   /   Эмпатия   /   Качество    /</ParallaxText>
              <span className='principlesLine'></span>
              <ParallaxText baseVelocity={-5}>Результат / Чистота / Эмоция / Функциональность /</ParallaxText>
          </section>
      </section>
      <FooterPrinciples handlePrinciplesShow={handlePrinciplesShow} />
    </section>
  );
}

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