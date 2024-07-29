import FooterPriciples from '../footer/footerPrinciples/FooterPrinciples'
import Navbar from '../navbar/Navbar'
import './principles.scss'

const words = [
  ['Современность', 'Удобство', 'Понятность', 'Эстетика'],
  ['Новизна', 'Эффективность', 'Эмпатия', 'Качество'],
  ['Результат', 'Чистота', 'Эмоция', 'Функциональность']
];

interface PrinciplesProps {
  handlePrinciplesShow: () => void;
}

const Principles: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
  return (
    <section className='principlesSection'>
      <Navbar/>
      <section className='principlesShow'>
        {words.map((line, i) => (
          <div key={i} className='marquee'>
            <div className='marquee-content'>
              {line.join(' ')} {line.join(' ')}
            </div>
          </div>
        ))}
      </section>
      <FooterPriciples handlePrinciplesShow={handlePrinciplesShow} />
    </section>
  );
}

export default Principles;
