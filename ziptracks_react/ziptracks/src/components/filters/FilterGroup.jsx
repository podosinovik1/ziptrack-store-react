import Filter from "./Filter"


const FilterGroup = (props) => {
  const {
    groupName,
    values,
    filters,
    filterHandler,
  } = props

  const displayedGroupName = {
    "manufacturer": "Производитель",
    "model": "Модель"
  }

  return (
    <>
      <h2>{displayedGroupName[groupName]}</h2>
      <div>
        {values.map((f) =>
          <Filter
            field={groupName}
            value={f}
            isChecked={filters?.[groupName]?.includes(f) || false}
            filterHandler={filterHandler}
            displayedName={f.toUpperCase()}
          />
        )}
      </div>
    </>
  )
}

export default FilterGroup
