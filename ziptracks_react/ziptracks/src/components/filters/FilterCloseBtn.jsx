import OpenCloseBtn from "../buttons/OpenCloseBtn"
import closeMenuIcon from "../../assets/icons/close.png"

const FilterCloseBtn = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props
  return (
    <OpenCloseBtn
      className={className}
      isOpen={isOpen}
      closeIcon={closeMenuIcon}
      onClick={onClose}
    />
  )
}

export default FilterCloseBtn