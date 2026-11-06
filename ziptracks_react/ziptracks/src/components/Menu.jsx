import { Link } from "react-router-dom"

const Menu = (props) => {
  const {
    navigationLinks,
    isOpen,
  } = props

  return (
    <div
      className={`menu ${isOpen ? "menu--open" : "menu--close"}`}
    >
      {navigationLinks.map((link, index) => (
        <Link
          to={link.path}
          className={link.className}
        >{link.text}</Link>
      ))}
    </div>
  )
}

export default Menu