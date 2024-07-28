import React from 'react'
import FooterPriciples from '../footer/footerPrinciples/FooterPrinciples'
import Navbar from '../navbar/Navbar'

interface PrinciplesProps {
  handlePrinciplesShow: () => void;
}

const Principles: React.FC<PrinciplesProps> = ({ handlePrinciplesShow }) => {
  return (
    <section className='overlay'>
        <Navbar/>
        <FooterPriciples handlePrinciplesShow={handlePrinciplesShow}/>
        {/* <img className='leftArrow' src={arrowLeft} alt='arrow' />Закрыть<img className='rightArrow' src={arrowRight} alt='arrow' /> */}
    </section>
  );
}

export default Principles;
