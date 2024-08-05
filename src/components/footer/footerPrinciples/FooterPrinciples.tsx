import { Link } from 'react-router-dom'
import './footerPrinciples.scss'

interface PrinciplesProps {
  handlePrinciplesShow: () => void;
}

const FooterPrinciples: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
    return (
      <footer className='principlesFooter'>
        <section className='principlesDesktop'>
            <Link to='https://dprofile.ru/starflowdesign/cv' target="_blank" rel="noopener noreferrer">Резюме CV</Link>
              <p className='navbarText'>
                Для того, чтобы сделать что-то <br></br>интересное, нужно это полюбить.
              </p>
            <button onClick={handlePrinciplesShow}>Закрыть</button>
        </section>
        <footer className='principlesMobile'>
                <p className='navbarTextMobile'>
                  Для того, чтобы сделать что-то <br></br>интересное, нужно это полюбить.
                </p>
                <section className='principlesMobile'>
                  <Link to='https://dprofile.ru/starflowdesign/cv' target="_blank" rel="noopener noreferrer">Резюме CV</Link>
                  <button onClick={handlePrinciplesShow}>Закрыть</button>
                </section>
          </footer>
      </footer>
    );
}

export default FooterPrinciples;