import { useEffect } from 'react'
import Splitting from 'splitting'

const useSplittingAnimation = (className: string, delay: number = 3600) => {
    useEffect(() => {
        // Initialize Splitting.js for text animation
        Splitting();

        // Apply the animation class after a short delay
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll(className);
            elements.forEach((element) => {
                element.classList.add('animate-on-load');
            });
        }, delay); // delay in ms

        return () => {
            clearTimeout(timeoutId); // Clear the timeout if the component unmounts
        };
    }, [className, delay]);
};

export default useSplittingAnimation;