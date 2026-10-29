import Card from "../card/Card.jsx"
import './cards.css'

const Cards = (props) => {
  const {
    cardsData, // [{k:v}, {k:v}, {k:v}]

  } = props

  return (
    <div
      className="cards"
    >
      {cardsData.map((p) => (
        <Card
          manufacturer={p.manufacturer}
          model={p.model}
          size={p.size}
        />
      ))}
    </div>
  )
}

export default Cards