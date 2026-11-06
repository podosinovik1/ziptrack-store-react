import { BrowserRouter as Router} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/content/Content"

import './styles/header.css'
import './styles/menu.css'
import './styles/burger-menu.css'
import './styles/footer.css'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </>

  )
}

export default App