import './App.css'
import Products from './Components/Page/Products/Products'
import Top from './Components/Page/Top/Top'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='bg-gray-800 h-screen text-white max-w-2x1 px-10 m-auto box-inherit block'>
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
