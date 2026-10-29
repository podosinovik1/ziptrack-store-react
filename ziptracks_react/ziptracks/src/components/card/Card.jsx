import './card.css'

const Card = (props) => {
  const {
    manufacturer,
    model,
    size,
  } = props

  return (
    <>
      <div
        className='card'
      >
        <div>{manufacturer}</div>
        <div>{model}</div>
        <div>{size}</div>
      </div>
    </>
  )
}

export default Card
