import OpenCloseBtn from "../buttons/OpenCloseBtn"
import filterIcon from "../../assets/icons/filter.png"

const FilterOpenBtn = (props) => {
  const {
    className,
    isOpen,
    onOpen,
  } = props
  return (
    <OpenCloseBtn
      className={`${className} ${isOpen ? 'filter-btn--highlight' : ''}`}
      isOpen={isOpen}
      closeIcon={filterIcon}
      openIcon={filterIcon}
      onClick={onOpen}
    />
  )
}

export default FilterOpenBtn