import { Routes, Route } from "react-router-dom"

import Catalog from "../catalog/Catalog"
import './content.css'
import MainPage from "../main_page/MainPage"

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path='/catalog' element={<Catalog/>} />
    </Routes>
  )
}

export default Content