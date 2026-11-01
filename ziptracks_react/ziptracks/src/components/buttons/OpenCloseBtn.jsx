const OpenCloseBtn = (props) => {
  const {
    className,
    onClick,
    isOpen,
    openIcon,
    closeIcon
  } = props

  return (
    <button
      className={className}
      onClick={onClick}
    >
      <img
        src={isOpen ? closeIcon : openIcon}
        alt={isOpen ? 'Закрыть' : 'Открыть'}
      />
    </button>
  )
}

export default OpenCloseBtn