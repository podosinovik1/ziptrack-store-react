import { useState } from 'react'
 
import Menu from './Menu'
import BurgerMenu from './BurgerMenu'

import logo from '../assets/icons/logo.png'


const Header = () => {

  const navigationLinks = [
    { id: 'general', href: '/', text: 'Главная' },
    { id: 'catalog', href: '/', text: 'Каталог' },
    { id: 'contacts', href: '/', text: 'Контакты' },
    { className: 'header-number', id: 'number', href: 'tel:+79873057274', text: '+79873057274' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const switchIcon = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt='Логотип' />
      </div>
      <Menu
        isOpen={isOpen}
        navigationLinks={navigationLinks}
      />
      <BurgerMenu
        switchIcon={switchIcon}
        isOpen={isOpen}
      />
    </div>
  )
}

export default Header