import { useState } from "react"

import { catalogFlat } from '../data.jsx'
import Filters from "../filters/Filters.jsx"
import Cards from "../cards/Cards.jsx"

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

  const [isDisplayedFilters, setIsDisplayedFilters] = useState(false)

  const filterBtn = () => {
    setIsDisplayedFilters(!isDisplayedFilters)
  }

  const [selectedProducts, setSelectedProducts] = useState({})

  const [isDisplayedBucket, setIsDisplayedBucket] = useState(false)

  const bucketToggler = () => {
    setIsDisplayedBucket(!isDisplayedBucket)
  }

  return (
    <>
      <div
        className="catalog__header"
      >
        <button
          className="filter-button"
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
          isOpen={isDisplayedBucket}
          bucketToggler={bucketToggler}
          selectedProducts={selectedProducts}
        />

      </div>

    </>
  )
}

export default Catalog