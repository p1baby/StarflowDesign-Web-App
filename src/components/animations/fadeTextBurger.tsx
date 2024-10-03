// "use client";

// import { motion, Variants } from "framer-motion"
// import { useMemo } from "react"

// type FadeTextProps = {
//   className?: string;
//   direction?: "up" | "down" | "left" | "right";
//   framerProps?: Variants;
//   text: string;
// };

// export function FadeText({
//   direction = "up",
//   className,
//   framerProps = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1 },
//   },
//   text,
// }: FadeTextProps) {
//     const directionOffset = useMemo(() => {
//     const map = { up: 25, down: -25, left: -10, right: 10 };
//     return map[direction];
// }, [direction]);

//     const axis = direction === "up" || direction === "down" ? "y" : "x";

//     const FADE_ANIMATION_VARIANTS = useMemo(() => {
//         const { hidden, show, ...rest } = framerProps as {
//         [name: string]: { [name: string]: number; opacity: number };
//     };

//     return {
//     ...rest,
//     hidden: {
//         ...(hidden ?? {}),
//         opacity: hidden?.opacity ?? 0,
//         [axis]: hidden?.[axis] ?? directionOffset,
//     },
//     show: {
//         ...(show ?? {}),
//         opacity: show?.opacity ?? 1,
//         [axis]: show?.[axis] ?? 0,
//     },
//     };
//     }, [directionOffset, axis, framerProps]);

//   return (
//     <motion.section
//         initial="hidden"
//         animate="show"
//         viewport={{ once: true }}
//         variants={FADE_ANIMATION_VARIANTS}>
//         <motion.span className={className}>{text}</motion.span>
//     </motion.section>
//     );
// }
