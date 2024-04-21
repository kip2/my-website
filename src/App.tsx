import Products from './Components/Page/Products/Products'
import Top from './Components/Page/Top/Top'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className=' bg-neutral-800 min-h-screen md:h-auto text-white max-w-2x1 px-10 m-auto box-inherit block'>
      <Router>
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
