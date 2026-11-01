import { useState } from "react"

import { dataFilter, appendUnique, removeItem, facetExtraction } from "../utilits/filter.js"
import FilterGroup from "./FilterGroup.jsx"
import './filters.css'

const Filters = (props) => {

  // Получаем данные и сеттер из родительского компонента Catalog
  const {
    catalogFlat,
    setCatalogFiltered,
    isOpen,
  } = props

  // Доступные фильтры
  const manufacturerFilters = facetExtraction(catalogFlat, "manufacturer")
  const modelFilters = facetExtraction(catalogFlat, "model")

  // Состояние фильтров
  const [filters, setFilters] = useState({})

  // Обработчик кликов
  const filterHandler = (k, v, c) => {
    const f = (c ? appendUnique(filters, k, v) : removeItem(filters, k, v))
    const cf = catalogFlat.filter((ce) => dataFilter(ce, f))

    setFilters(f)
    setCatalogFiltered(cf)
  }

  return (
    <div
      className={`filters-wrapper ${isOpen ? 'filters--open' : 'filter--close'}`}
    >
      <a>Фильтры</a>
      <div
        className="filters"
      >
        {Object.entries(manufacturerFilters).map(([field, values]) => (
          <FilterGroup
            key={field}
            groupName={field}
            values={values}
            filters={filters}
            filterHandler={filterHandler}
          />
        ))}

        {Object.entries(modelFilters).map(([field, values]) => (
          <FilterGroup
            key={field}
            groupName={field}
            values={values}
            filters={filters}
            filterHandler={filterHandler}
          />
        ))}
      </div>
    </div>

  )
}

export default Filters