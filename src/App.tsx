import './App.css'
import Products from './Components/Page/Products/Products'
import Top from './Components/Page/Top/Top'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
