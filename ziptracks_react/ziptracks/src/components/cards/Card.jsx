import './card.css'
import cat from '../../assets/image/caterpillar.jpg'

const Card = (props) => {
  const {
    id,
    manufacturer,
    model,
    size,
    addProduct,
  } = props

  return (
    <>
      <div
        className='card'
      >
        <div
          className='image'
        >
          <img
            src={cat}
          >
          </img>
        </div>

        <div
          className='manufacturer'
        >{manufacturer}
        </div>

        <div
          className='model'
        >{model}</div>

        <div
          className='size'
        >{size}</div>

        <div
          className='select-button'
        >
          <button
            onClick={() => addProduct(id)}
          >Добавить
          </button>
        </div>


      </div>
    </>
  )
}

export default Card
