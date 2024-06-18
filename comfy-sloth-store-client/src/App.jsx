import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Navbar/Sidebar'
import Footer from './components/Footer/Footer'
import { Home, About, Products, SingleProduct, Cart, Error, Login, Checkout } from './pages'

function AppLayout() {
  const location = useLocation();
  const hide = location.pathname === '/login';
  return (
    <>
      {!hide && <Navbar />}
      {!hide && <Sidebar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/product/:id' element={<SingleProduct />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {!hide && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
