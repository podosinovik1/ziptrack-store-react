import { useState } from "react"

import { catalogFlat } from '../data.jsx'
import Filters from "../filters/Filters.jsx"
import Cards from "../cards/Cards.jsx"

import './catalog.css'
import Bucket from "../bucket/Bucket.jsx"
import FilterOpenBtn from "./FilterOpenBtn.jsx"


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

  const [isOpenFilters, setIsOpenFilters] = useState(false)

  const toggleFilters = () => {
    setIsOpenFilters(!isOpenFilters)
  }

  const [selectedProducts, setSelectedProducts] = useState({})

  const [isOpenBucket, setIsOpenBucket] = useState(false)

  const toggleBucket = () => {
    setIsOpenBucket(!isOpenBucket)
  }

  return (
    <>
      <div
        className="catalog__header"
      >
        <FilterOpenBtn
          className='filter-btn'
          isOpen={isOpenFilters}
          onOpen={toggleFilters}
        />
      </div >
      <div
        className="catalog"
      >
        <Cards
          cardsData={catalogFiltered}
          setSelectedProducts={setSelectedProducts}
        />
        <Filters
          isOpen={isOpenFilters}
          catalogFlat={catalogFlat}
          setCatalogFiltered={setCatalogFiltered}
          onClose={toggleFilters}
        />

        <Bucket
          isOpen={isOpenBucket}
          bucketToggler={toggleBucket}
          selectedProducts={selectedProducts}
        />

      </div>

    </>
  )
}

export default Catalog