import { Link } from 'react-router-dom'
import './footerPrinciples.scss'

interface PrinciplesProps {
  handlePrinciplesShow: () => void;
}

const FooterPrinciples: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
    return (
      <footer className='principlesFooter'>
            <Link to='https://dprofile.ru/starflowdesign/cv' target="_blank" rel="noopener noreferrer">Резюме CV</Link>
            <button onClick={handlePrinciplesShow}>Закрыть</button>
      </footer>
    );
}

export default FooterPrinciples;