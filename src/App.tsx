import About from './Components/Page/About/About'
import HistoryDetail from './Components/Page/About/History/HistoryDetail'
import NotFoundPage from './Components/Page/Error/NotFoundPage'
import Products from './Components/Page/Products/Products'
import Top from './Components/Page/Top/Top'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'normalize.css'
import ProductDetail from './Components/Page/Products/ProductDetail'

const App = () => {
  return (
    <div className=' bg-neutral-800 min-h-screen md:h-auto text-white max-w-2x1 px-10 m-auto box-inherit block'>
      <Router>
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />}/>
          <Route path="/about/history/detail/:id" element={<HistoryDetail />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
