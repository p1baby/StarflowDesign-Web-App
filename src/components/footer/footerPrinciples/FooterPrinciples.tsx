import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Splitting from 'splitting'
import useSplittingHover from '../../hooks/useSplittingHover'
import './footerPrinciples.scss'

interface PrinciplesProps {
    handlePrinciplesShow: () => void;
}

const FooterPrinciples: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
    const [visibleLines, setVisibleLines] = useState<number[]>([]);
    
    useSplittingHover();

    useEffect(() => {
        Splitting({ target: '.navbarText p' });
        
        const initialDelay = 150; // delay for first string
        const subsequentDelay = 100; // delay beetween strings

        const lines = document.querySelectorAll('.navbarText p');
        lines.forEach((_line, index) => {
            const delay = initialDelay + subsequentDelay * index;
            setTimeout(() => {
                setVisibleLines(prev => [...prev, index]);
            }, delay);
        });
    }, []);

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
                <section className='navbarText'>
                    <section>
						<p className={visibleLines.includes(0) ? 'visible' : ''} data-splitting>
							<span className='char'>Для того, чтобы сделать что-то</span>
						</p>
						<p className={visibleLines.includes(1) ? 'visible' : ''} data-splitting>
							<span className='char'>интересное, нужно это полюбить.</span>
						</p>
					</section>
                </section>
                <a
                className='closeLink'
                data-splitting
                onClick={handlePrinciplesShow}
                >
                    Закрыть
                </a>
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
