import { useState } from "react"

import { catalogFlat } from './data.jsx'
import Filters from "./filters/Filters.jsx"
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

  const [isDisplayedFilters, setIsDisplayedFilters] = useState(true)

  const filterBtn = () => {
    setIsDisplayedFilters(!isDisplayedFilters)
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
          <button
            onClick={filterBtn}
          >
            Фильтры
          </button>
        </div>

        <Cards
          cardsData={catalogFiltered}
        />
        <Filters
          isOpen={isDisplayedFilters}
          catalogFlat={catalogFlat}
          setCatalogFiltered={setCatalogFiltered}
        />
      </div >
    </>
  )
}

export default Catalog