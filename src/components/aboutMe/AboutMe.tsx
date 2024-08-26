import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './aboutme.scss'

const AboutMe = () => {
    const location = useLocation();
    const isServicesPage = location.pathname === '/services';

    const element = useRef(null);

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    // useEffect( () => {
    //     scrollYProgress.on('change', e => console.log(e))
    // })
    // const words = value.split(" ");
    // return (
    //     <p
    //         ref={element}
    //     >
    //         {
    //             words.map((word, i) => {
                    
    //             }
    //         }

    //     </p>
    // )

	return (
		<section className='aboutMeSection'>
            {isServicesPage ? (
                <p className='textTop'>Я за ответственный подход к процессу,<br />пунктуальность и внимательность<br />к словам клиента.</p>
            ) : (
                <p className='textTop'>Убежден в том, что хороший дизайн важен<br />не только для пользовательского опыта,<br />но и для имиджа бренда.</p>   
            )} 
            <section className='textMain'>
                <p>{isServicesPage ? '( Мой подход )' : '( Обо мне )'}</p>
                {isServicesPage ? (
                    <React.Fragment>
                        <motion.h4 ref={element} style={{opacity: scrollYProgress}}>Разделяю большие и сложные задачи<br />на самодостаточные и прозрачные этапы,<br />чтобы клиент всегда знал, как движется<br />его проект.</motion.h4>
                        <motion.h4 ref={element} style={{opacity: scrollYProgress}}>Разделяю большие и сложные<br />задачи на самодостаточные<br />и прозрачные этапы, чтобы<br />клиент всегда знал, как<br />движется его проект.</motion.h4>
                        <motion.h4 ref={element} style={{opacity: scrollYProgress}}>Разделяю большие<br />и сложные задачи<br />на самодостаточные<br />и прозрачные этапы,<br />чтобы клиент всегда<br />знал, как движется<br /> его проект.</motion.h4>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <motion.h3 ref={element} style={{opacity: scrollYProgress}}>Я люблю продуманный дизайн. Стремлюсь<br />к понятности, простоте и эстетике.<br />Пробую современные визуальные решения.<br />Каждая моя работа — это вызов самому себе.</motion.h3>
                        <motion.h3 ref={element} style={{opacity: scrollYProgress}}>Я люблю продуманный дизайн. Стремлюсь к понятности, простоте и эстетике. Пробую современные визуальные решения. Каждая моя работа — это вызов самому себе.</motion.h3>
                        <motion.h3 ref={element} style={{opacity: scrollYProgress}}>Я люблю продуманный дизайн. Стремлюсь к понятности, простоте<br />и эстетике. Пробую современные визуальные решения. Каждая моя работа — это вызов самому себе.</motion.h3>                    
                    </React.Fragment>
                )}      
            </section>
            {isServicesPage ? (
                <p className='textBottom'>Я уделяю большое внимание логике<br />и визуальному оформлению проекта<br />для укрепления личного бренда.</p>
            ) : (
                <p className='textBottom'>Я верю, что лучшие работы получаются на стыке<br />эмоций и ясности, сочетая в себе не только<br />эстетику, но и удобство.</p>
            )} 
        </section>
		)
	}

export default AboutMe;