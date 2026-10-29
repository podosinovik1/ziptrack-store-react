import { useState } from "react"

import { catalogFlat } from './data.jsx'
import Filters from "./Filters.jsx"
import Cards from "./cards/Cards.jsx"


const Catalog = () => {

  const [catalogFiltered, setCatalogFiltered] = useState(catalogFlat)

  const catalogFilter = (q) => {
    // Поисковик
    q = q.trim().toLowerCase()
    setCatalogFiltered(
      catalogFlat.filter((p) =>
        Object.values(p).some((value) =>
          value != null && String(value).toLowerCase().includes(q)
        )
      )
    )
  }

  return (
    <>
      <div
        className="main"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr',
          gap: '30px',
        }}>

        <div className="catalog">
          <input
            onChange={(event) => catalogFilter(event.target.value)}
          ></input>
          <Cards
            cardsData={catalogFiltered}
          />
        </div>

        <Filters
          catalogFlat={catalogFlat}
          setCatalogFiltered={setCatalogFiltered}
        />

      </div>
    </>
  )
}

export default Catalog