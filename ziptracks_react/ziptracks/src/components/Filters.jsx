import { useState } from "react"
import { dataFilter, appendUnique, removeItem, facetExtraction } from "./utilits/filter.js"
import FilterGroup from "./FilterGroup.jsx"

const Filters = (props) => {
  // Получаем данные и сеттер из родительского компонента Catalog
  const { 
    catalogFlat, 
    setCatalogFiltered 
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
      className="filters"
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
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
  )
}

export default Filters