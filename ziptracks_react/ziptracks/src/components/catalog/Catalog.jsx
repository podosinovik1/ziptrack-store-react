import { useState } from "react"

import { catalogFlat } from '../data.jsx'
import Filters from "../filters/Filters.jsx"
import Cards from "../cards/Cards.jsx"
import BucketPlaceholder from "./BucketPlaceholder.jsx"

import './catalog.css'
import Bucket from "../bucket/Bucket.jsx"


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

  const [selectedProducts, setSelectedProducts] = useState({})


  return (
    <>
      <div
        className="catalog__header"
      >
        <input
          onChange={(event) => catalogFilter(event.target.value)}
        />
        <button
          onClick={filterBtn}
        >
          Фильтры
        </button>
      </div >
      <div
        className="catalog"
      >
        <Cards
          cardsData={catalogFiltered}
          setSelectedProducts={setSelectedProducts}
        />
        <Filters
          isOpen={isDisplayedFilters}
          catalogFlat={catalogFlat}
          setCatalogFiltered={setCatalogFiltered}
        />

        <Bucket
          selectedProducts={selectedProducts}
        />

      </div>

    </>
  )
}

export default Catalog