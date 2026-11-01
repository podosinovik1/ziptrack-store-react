import { useState } from "react"

import { dataFilter, appendUnique, removeItem, facetExtraction } from "../utilits/filter.js"
import FilterGroup from "./FilterGroup.jsx"
import './filters.css'
import FilterCloseBtn from "./FilterCloseBtn.jsx"

const Filters = (props) => {

  // Получаем данные и сеттер из родительского компонента Catalog
  const {
    catalogFlat,
    setCatalogFiltered,
    isOpen,
    onClose
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
      <div
        className="filters"
      >
        <div
          className="filters-header"
        >
          <h1
            className="filters-header__title"
          >Фильтры
          </h1>
          <FilterCloseBtn
            className='filters-cls-btn'
            onClose={onClose}
            isOpen={isOpen}
          />
        </div>
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