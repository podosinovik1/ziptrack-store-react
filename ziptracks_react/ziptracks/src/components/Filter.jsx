import { useId } from "react"

const Filter = (props) => {
  const {
    field,
    value,
    isChecked,
    displayedName,
    filterHandler,
  } = props

  const autoId = useId()

  return (
    <div>
      <input
        id={autoId}
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={(e) => filterHandler(field, e.target.value, e.target.checked)}
      />
      <label htmlFor={autoId}>
        {displayedName}
      </label>
    </div>
  )
}

export default Filter