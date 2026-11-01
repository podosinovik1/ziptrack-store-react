import OpenCloseBtn from './buttons/OpenCloseBtn'
import burgerMenuIcon from '../assets/icons/burger-menu.png'
import closeMenuIcon from '../assets/icons/close.png'


const BurgerMenuBtn = (props) => {
  const {
    switchIcon,
    isOpen,
  } = props

  return (
      <OpenCloseBtn
        className='burger-menu'
        onClick={switchIcon}
        isOpen={isOpen}
        openIcon={burgerMenuIcon}
        closeIcon={closeMenuIcon}
    />
  )
}

export default BurgerMenuBtn