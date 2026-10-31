import { useInView } from "react-intersection-observer"
import './bucket.css'

const Bucket = (props) => {
    const { ref, inView } = useInView({
        threshold: 1.0,
    })

    const { selectedProducts } = props

    return (
        <div ref={ref} className="bucket-wrapper">
            
            <div className={`bucket ${inView ? 'bucket--docked' : ''}`}>
                <h1>Корзина</h1>
                {Object.entries(selectedProducts).map(([id, count]) => (
                    <div key={id}>
                        Товар с ID: {id} — Количество: {count}
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Bucket