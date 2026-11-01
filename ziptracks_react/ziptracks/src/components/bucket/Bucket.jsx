import { useInView } from "react-intersection-observer"
import './bucket.css'

const Bucket = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.0,
  })

  const {
    selectedProducts,
    isOpen,
    bucketToggler
  } = props

  const FullBucket = (props) => {
    const {
      className,
    } = props

    return (
      <div
        className={`bucket ${className}`}
      >
        <a>Корзина Полная</a>
        {Object.entries(selectedProducts).map(([id, count]) => (
          <div key={id}>
            Товар с ID: {id} — Количество: {count}
          </div>
        ))}
      </div>
    )

  }

  return (
    <div ref={ref} className="bucket-wrapper">
      <div
        className={`bucket-bottomsheet ${inView ? '' : 'bucket-bottomsheet--displayed'}`}
      >
        <button
          onClick={bucketToggler}
        >Открыть
        </button>
        {
          isOpen ?
            (
              <FullBucket
                className='bucket--open'
              />
            ) :
            (
              <div
                className='bucket-mini'
              >Маленькая Корзина</div>
            )
        }
      </div>

      <FullBucket
        className='bucket--docked'
      />

    </div>
  )
}

export default Bucket