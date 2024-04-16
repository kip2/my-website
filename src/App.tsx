import './App.css'
import Products from './Components/Page/Products/Products'
import Top from './Components/Page/Top/Top'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='bg-gray-800 flex items-center justify-center h-screen text-white'>
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
