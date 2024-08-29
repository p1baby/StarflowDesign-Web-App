// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './projects.scss'

// import TransitionContext from '../../components/contextGsap/TransitionContext'

// gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {


  // const main = useRef<HTMLElement | null>(null);
  // const context = useContext(TransitionContext);
  // const scrollTween = useRef<gsap.core.Tween | null>(null);
  // const snapTriggers = useRef<ScrollTrigger[]>([]);

  // useEffect(() => {
  //   if (!context || !main.current) return;

  //   const panels: HTMLElement[] = gsap.utils.toArray('.panel', main.current) as HTMLElement[];
  //   let scrollStarts: number[] = [0];
  //   let snapScroll = (value: number, direction: number) => value + direction;

  //   panels.forEach((panel, i) => {
  //     snapTriggers.current[i] = ScrollTrigger.create({
  //       trigger: panel,
  //       start: 'top top',
  //     });
  //   });

  //   ScrollTrigger.addEventListener('refresh', () => {
  //     scrollStarts = snapTriggers.current.map((trigger) => trigger.start);
  //     snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
  //   });

  //   ScrollTrigger.observe({
  //     type: 'wheel,touch',
  //     onChangeY(self) {
  //       if (!scrollTween.current) {
  //         const direction = self.deltaY > 0 ? 0.1 : -1; // Уменьшите значение deltaY
  //         const scroll = snapScroll(self.scrollY(), direction * Math.abs(self.deltaY));
  //         goToSection(scrollStarts.indexOf(scroll));
  //       }
  //     },
  //   });
  //   ScrollTrigger.refresh();
  // }, [context]);

  // const goToSection = (i: number) => {
  //   console.log('scroll to', i);
  //   scrollTween.current = gsap.to(window, {
  //     scrollTo: { y: snapTriggers.current[i].start as number, autoKill: false },
  //     duration: 1,
  //     onComplete: () => (scrollTween.current = null),
  //     overwrite: true,
  //   });
  // };

  return (
    <main>
      <section className="panel">
          <img className="bg" src='/projectsBg1.png'/>
      </section>
      <section className="panel">
        <img className="bg" src='/projectsBg2.png'/>
      </section>
      <section className="panel">
        <img className="bg" src='/projectsBg3.png'/>
      </section>
    </main>
  );
}

export default Projects;
