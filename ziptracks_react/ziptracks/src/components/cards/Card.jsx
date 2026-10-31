import './card.css'

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
        <div>{manufacturer}</div>
        <div>{model}</div>
        <div>{size}</div>
        <button
          className='select-button'
          onClick={() => addProduct(id)}
        >Добавить
        </button>
      </div>
    </>
  )
}

export default Card
