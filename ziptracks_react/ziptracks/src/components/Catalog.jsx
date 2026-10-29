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
        className="catalog"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '50px 1fr',
          gap: '30px',
        }}>
        <div
          className="catalog__header"
          style={{
            gridColumn: '1 / 3',
            gridRow: '1 / 2',

            display: 'flex'
          }}
        >
          <div>
            <input
              onChange={(event) => catalogFilter(event.target.value)}
            />
          </div>
          <div>Фильтры</div>
        </div>

        <Cards
          cardsData={catalogFiltered}
        />
        <Filters
          catalogFlat={catalogFlat}
          setCatalogFiltered={setCatalogFiltered}
        />
      </div >
    </>
  )
}

export default Catalog