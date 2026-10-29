import burgerMenuIcon from '../assets/icons/burger-menu.png'
import closeMenuIcon from '../assets/icons/close.png'


const BurgerMenu = (props) => {
  const {
    switchIcon,
    isOpen,
  } = props

  return (
    <button
      className='burger-menu'
      onClick={switchIcon}
    >
      <img
        src={isOpen ? closeMenuIcon : burgerMenuIcon}
        alt={isOpen ? 'Закрыть' : 'Открыть'}
      />
    </button>

  )
}

export default BurgerMenu