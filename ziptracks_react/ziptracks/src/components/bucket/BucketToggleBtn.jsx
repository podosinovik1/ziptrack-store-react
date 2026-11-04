import OpenCloseBtn from "../buttons/OpenCloseBtn"
import upIcon from "../../assets/icons/up.png"
import downIcon from "../../assets/icons/down.png"

const BucketToggleBtn = (props) => {
  const {
    onClick,
    isOpen
  } = props

  return (
    <OpenCloseBtn
      className='bucket-toggle-btn'
      onClick={onClick}
      isOpen={isOpen}
      openIcon={upIcon}
      closeIcon={downIcon}
    />
  )
}

export default BucketToggleBtn