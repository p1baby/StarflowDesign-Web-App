import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import './layout.scss'

interface CurveProps {
  children: React.ReactNode;
}

interface Dimensions {
  height: number;
  width: number;
}

// Generalized anim function to handle any animation variants
const anim = (variants: any) => {
	return {
		initial: 'initial',
		animate: 'enter',
		exit: 'exit',
		variants
	}
}

const Curve: FC<CurveProps> = ({children}) => {
	const [dimensions, setDimensions] = useState<Dimensions>({
		height: 0,
		width: 0
	});

	useEffect(() => {
		const resize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		resize();

		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	// useEffect(() => {
	// 	// Add overflow: hidden to the body when the component mounts
	// 	document.body.style.overflow = 'hidden';
	
	// 	return () => {
	// 	  // Remove overflow: hidden when the component unmounts
	// 	  document.body.style.overflow = '';
	// 	};
	//   }, []);

	// Text animation
	const text = {
		initial: {
			opacity: 1
		},
		enter: {
			opacity: 0,
			transition: {
				duration: .75,
				delay: 7.150,
				ease: [0.76, 0, 0.24, 1]
			}
		},
		exit: {
			opacity: 1,
			transition: {
				ease: [0.33, 1, 0.68, 1]
			},
		}
	}

	return (
		<motion.section className='SectionPage'>
			<motion.p {...anim(text)} className='loadingText'>Staflow Design<span className='labelc'>©</span></motion.p>
			<section style={{opacity: dimensions.width > 0 ? 0 : 1}} className='background'></section>
			{dimensions.width > 0 && <SVG width={dimensions.width} height={dimensions.height} />}
			{children}
		</motion.section>
	)
}

interface SVGProps {
  width: number;
  height: number;
}

const SVG: FC<SVGProps> = ({ width, height }) => {
	const initialPath = `
		M 0 0
		L ${width} 0
		L ${width} ${height}
		L 0 ${height}
		Z
	`

  	const targetPath = `
		M 0 0
		L ${width} 0
		L ${width} ${height}
		L 0 ${height}
		Z
    `
	// SVG path animation
	const curve = {
		initial: {
			d: initialPath
		},
		enter: {
			d: targetPath,
			transition: {
				duration: .75,
				delay: 0.3,
				ease: [0.76, 0, 0.24, 1]
			}
		},
		exit: {
			d: initialPath,
			transition: {
				duration: .75,
				ease: [0.76, 0, 0.24, 1]
			}
		}
	}
	// Slide animation
	const slide = {
		initial: {
			top: '0px'
		},
		enter: {
			top: '-100vh',
			transition: {
				duration: 1,
				delay: 7,
				ease: [0.76, 0, 0.24, 1]
			},
			transitionEnd: {
				top: '100vh'
			}
		},
		exit: {
			top: '0px',
			transition: {
				duration: 1,
				ease: [0.76, 0, 0.24, 1]
			}
		}
	}

	return (
		<motion.svg {...anim(slide)}>
			<motion.path {...anim(curve)} />
		</motion.svg>
	)
}

export default Curve;
