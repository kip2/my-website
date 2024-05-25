import About from './Components/Page/About/About'
import HistoryDetail from './Components/Page/About/History/HistoryDetail'
import NotFoundPage from './Components/Page/Error/NotFoundPage'
import Products from './Components/Page/Products/Products'
import Top from './Components/Page/Top/Top'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'normalize.css'
import ProductDetail from './Components/Page/Products/ProductDetail'
import Favorite from './Components/Page/Favorite/Favorite'
import Influenced from './Components/Page/Influenced/Influenced'
import FavoriteDetail from './Components/Page/Favorite/FavoriteDetail'
import InfluencedDetail from './Components/Page/Influenced/InfluencedDetail'
import AboutSite from './Components/Page/AboutSite/AboutSite'
import { HelmetProvider } from 'react-helmet-async'
import Ogp from './Components/UI/OGP'

const App = () => {
  return (
    <HelmetProvider>
      <div className=' bg-neutral-800 min-h-screen md:h-auto text-white max-w-2x1 px-10 m-auto box-inherit block'>
        <Ogp />
        <Router>
          <Routes>
            <Route path="/" element={<Top />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />}/>
            <Route path="/about/history/:id" element={<HistoryDetail />} />
            <Route path="/favorite" element={<Favorite />}/>
            <Route path="/favorite/:id" element={<FavoriteDetail />}/>
            <Route path="/influenced" element={<Influenced />}/>
            <Route path="/influenced/:id" element={<InfluencedDetail />}/>
            <Route path="/about-site" element={<AboutSite />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App
