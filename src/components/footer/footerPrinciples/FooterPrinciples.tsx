import { Link } from 'react-router-dom'
import useSplittingHover from '../../hooks/useSplittingHover'
import './footerPrinciples.scss'

interface PrinciplesProps {
    handlePrinciplesShow: () => void;
}

const FooterPrinciples: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
    
    useSplittingHover();

    return (
        <footer className='principlesFooter'>
            <section className='principlesDesktop'>
                <Link
                data-splitting 
                to='https://dprofile.ru/starflowdesign/cv' 
                target="_blank" rel="noopener noreferrer"
                >
                    Резюме CV
                </Link>
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
                    <button
                    data-splitting 
                    onClick={handlePrinciplesShow}
                    >
                        Закрыть
                    </button>
                </section>
            </footer>
        </footer>
    );
}

export default FooterPrinciples;

function seSplittingHover() {
    throw new Error('Function not implemented.')
}
