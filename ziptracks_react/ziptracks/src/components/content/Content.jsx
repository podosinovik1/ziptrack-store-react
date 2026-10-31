import Catalog from "../catalog/Catalog"
import './content.css'

const Content = () => {
  // Меняется: Главная, Каталог
  return (
    <div
      className="content"
    >
      <Catalog />
    </div>
  )
}

export default Content