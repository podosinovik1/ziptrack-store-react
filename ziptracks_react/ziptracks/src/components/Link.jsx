const Link = (props) => {

  const {
    className = '',
    id,
    href,
    children
  } = props

  return (
    <a className={className} id={id} href={href}>{children}</a>
  )
}

export default Link