import {
  MotionValue,
  useScroll,
  useTransform
} from "framer-motion"
import { useRef } from "react"
import './projects.scss'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 3);

  return (
    <section className='projectSection'>
    {/* <div ref={ref}> */}
      {/* <motion.section className="panel">
        <motion.img className="bg" src='/projectsBg1.png' style={{ y }}/>
      </motion.section>
      <motion.section className="panel">
        <motion.img className="bg" src='/projectsBg2.png' style={{ y }}/>
      </motion.section>
      <motion.section className="panel">
        <motion.img className="bg" src='/projectsBg3.png' style={{ y }}/>
      </motion.section> */}
      {/* <img className='bg' src='/projectsBg1.png'/>
      <img className='bg' src='/projectsBg2.png'/>
      <img className='bg' src='/projectsBg3.png'/>
    </div> */}
    1
    </section>
  );
}

export default Projects;
