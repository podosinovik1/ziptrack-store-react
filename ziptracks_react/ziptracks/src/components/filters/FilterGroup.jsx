import Filter from "./Filter"


const FilterGroup = (props) => {
  const {
    groupName,
    values,
    filters,
    filterHandler,
  } = props

  return (
    <>
      <h2>{groupName}</h2>
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
