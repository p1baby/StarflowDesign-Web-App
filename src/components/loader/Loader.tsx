import NumberTicker from '../magicui/number-ticker.tsx'
import './loader.scss'

const Loader = () => {
    return (
        <section className='loader'>
            <h4>
                <NumberTicker value={100} />
                <span className='procent'>%</span>
            </h4>
        </section>
    )
}

export default Loader;
