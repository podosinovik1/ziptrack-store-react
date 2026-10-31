import Card from "./Card.jsx"
import './cards.css'

import { incrementCounter } from "../utilits/bucket.js"


const Cards = (props) => {
  const {
    cardsData, // [{k:v}, {k:v}, {k:v}]
    setSelectedProducts
  } = props

  const addProduct = (v) => {
    setSelectedProducts((ps) => {
      return incrementCounter(ps, v)
    })
  }

  return (
    <div
      className="cards-wrapper"
    >
      <div
        className="cards"
      >
        {cardsData.map((p) => (
          <Card
            id={p.id}
            manufacturer={p.manufacturer}
            model={p.model}
            size={p.size}
            addProduct={addProduct}
          />
        ))}
      </div>
    </div>

  )
}

export default Cards