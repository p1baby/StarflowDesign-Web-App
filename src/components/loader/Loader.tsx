import './loader.scss'
import NumberTicker from '../magicui/number-ticker.tsx'

const Loader = () => {
    return (
        <section className='loader'>
            <h3>
                <NumberTicker value={100} />
                <span className='procent'>%</span>
            </h3>
        </section>
    )
}

export default Loader;
