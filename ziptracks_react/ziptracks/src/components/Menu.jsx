import Link from "./Link"

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
          className={link.className}
          key={link.id}
          id={link.id}
          href={link.href}
        > 
          {link.text}
        </Link>
      ))}
    </div>
  )
}

export default Menu