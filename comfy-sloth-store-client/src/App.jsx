import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Navbar/Sidebar'
import Footer from './components/Footer/Footer'
import { Home, About, Products, SingleProduct, Cart } from './pages'

function App() {

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
