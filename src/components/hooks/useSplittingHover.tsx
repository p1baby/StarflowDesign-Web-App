import { useEffect } from 'react'
import Splitting from 'splitting'

import "splitting/dist/splitting-cells.css"
import "splitting/dist/splitting.css"

const useSplittingHover = () => {
    useEffect(() => {
            // const results = 
            Splitting();
            // console.log(results); // Debug: See what elements are affected by Splitting.js
        }, []);
}
export default useSplittingHover;
