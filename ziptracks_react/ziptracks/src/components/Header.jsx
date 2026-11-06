import { useState } from 'react'
 
import Menu from './Menu'
import BurgerMenuBtn from './BurgerMenuBtn'

import logo from '../assets/icons/logo.png'


const Header = () => {

  const navigationLinks = [
    { id: 'general', path: '/', text: 'Главная' },
    { id: 'catalog', path: '/catalog', text: 'Каталог' },
    { id: 'contacts', path: '/', text: 'Контакты' },
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
      <BurgerMenuBtn
        switchIcon={switchIcon}
        isOpen={isOpen}
      />
    </div>
  )
}

export default Header